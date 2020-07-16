from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.core.validators import MinValueValidator
from django.db import models
from datetime import date


ATIVO = 'ATIVO'
INATIVO = 'INATIVO'
DE_ALTA = 'DE_ALTA'
FALECIDO = 'FALECIDO'

SITUACAO_CHOICES = (
    (ATIVO, 'Ativo'),
    (INATIVO, 'Inativo'),
    (DE_ALTA, 'Alta Médica'),
    (FALECIDO, 'Falecido'),
)

MENSAL = 30
QUINZENAL = 15
SEMANAL = 7
INDEFINIDO = 1

PERIODO_CHOICES = (
    (MENSAL, 'Mensal'),
    (QUINZENAL, 'Quinzenal'),
    (SEMANAL, 'Semanal'),
    (INDEFINIDO, 'Indefinido')
)

SEXO_MSC = 'M'
SEXO_FEM = 'F'
SEXO_NF = 'N'

GENERO = (
    (SEXO_MSC, 'Masculino'),
    (SEXO_FEM, 'Feminino'),
    (SEXO_NF, 'Não Informado'),
)


class TipoTratamento(models.Model):
    descricao = models.CharField(
        max_length=50, unique=True, verbose_name='Descrição')

    def __str__(self):
        return self.descricao


class Produto(models.Model):
    descricao = models.CharField(
        max_length=100, verbose_name='Descrição')
    especificacao = models.CharField(
        max_length=20, verbose_name='Especificação')

    def __str__(self):
        return self.descricao


class Paciente(models.Model):
    nome = models.CharField(max_length=255)
    telefone = models.CharField(max_length=11, null=True, blank=True)
    tel_contato = models.CharField(
        max_length=11,
        null=True,
        blank=True,
        verbose_name='Telefone Contato')
    num_doc = models.CharField(
        max_length=20, null=True, blank=True, verbose_name='N° Documento')
    obs = models.TextField(
        null=True, blank=True, verbose_name='Observação')
    situacao = models.CharField(
        max_length=8,
        choices=SITUACAO_CHOICES,
        default=ATIVO,
        verbose_name='Situação')
    sexo = models.CharField(
        max_length=1, choices=GENERO, default=SEXO_NF
    )
    data_nascimento = models.DateField(
        null=True, blank=True, verbose_name='Dt. Nascimento')
    data_cadastro = models.DateField(
        auto_now_add=True, verbose_name='Dt. Cadastro')
    email = models.EmailField(null=True, blank=True)

    ## Endereco ##
    cep = models.CharField(
        max_length=8)
    logradouro = models.CharField(
        max_length=100)
    numero = models.CharField(
        max_length=10)
    complemento = models.CharField(
        max_length=25, null=True, blank=True)
    bairro = models.CharField(
        max_length=50)
    cidade = models.CharField(
        max_length=50)
    uf = models.CharField(
        max_length=2)

    tipo_tratamento = models.ForeignKey(
        TipoTratamento, on_delete=models.PROTECT)

    def __str__(self):
        return self.nome


class Beneficio(models.Model):
    paciente = models.ForeignKey(
        Paciente, on_delete=models.PROTECT,
        db_column='paciente_id', verbose_name='Paciente')
    produto = models.ForeignKey(
        Produto, on_delete=models.PROTECT,
        db_column='produto_id', verbose_name='Produto')
    quantidade = models.PositiveSmallIntegerField(default=1)
    periodo = models.IntegerField(
        choices=PERIODO_CHOICES, default=SEMANAL
    )
    data_ultimo_lancamento = models.DateField(
        null=True, blank=True, verbose_name='Dt último lançamento')

    def __str__(self):
        return str(self.id)


class Pedido(models.Model):
    data_cadastro = models.DateTimeField(
        auto_now_add=True, null=False, blank=False)
    paciente = models.ForeignKey(
        Paciente, on_delete=models.PROTECT,
        db_column='paciente_id', verbose_name='Paciente')
    data_liberacao = models.DateField(null=True, blank=True)

    reference = models.CharField(
        editable=False, max_length=14)

    def __str__(self):
        return str(self.id)


class Item(models.Model):

    pedido = models.ForeignKey(
        Pedido, on_delete=models.CASCADE,
        db_column='pedido_id', related_name="itens", verbose_name='Pedido')

    produto = models.ForeignKey(
        Produto, on_delete=models.PROTECT,
        db_column='produto_id', verbose_name='Produto')

    quantidade = models.PositiveSmallIntegerField(
        default=1,
        validators=[MinValueValidator(
            limit_value=1,
            message='O item precisa ter quantidade superior a 0.')
        ]
    )

    def __str__(self):
        return str(self.id)


@receiver(pre_save, sender=Pedido)
def create_pedido(sender, instance, raw, **kwargs):
    if not instance.id:
        last = sender.objects.order_by('-id').first()
        next_id = 1 if not last else last.id + 1
        instance.reference = "{}{:06d}".format(
            date.today().strftime('%Y%m%d-'), next_id)


@receiver(post_save, sender=Item)
def atualizar_beneficio(sender, **kwargs):
    if kwargs.get('created', True):
        item = kwargs.get('instance')
        if item:
            paciente = item.pedido.paciente
            produto = item.produto
            try:
                beneficio = Beneficio.objects.get(
                    paciente=paciente.id,
                    produto=produto.id,
                )
            except Exception as e:
                beneficio = None

            if beneficio:
                beneficio.data_ultimo_lancamento = date.today()
                beneficio.save()
