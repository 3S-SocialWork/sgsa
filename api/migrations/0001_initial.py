# Generated by Django 3.0.5 on 2020-05-29 00:26

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255)),
                ('telefone', models.CharField(blank=True, max_length=11, null=True)),
                ('tel_contato', models.CharField(blank=True, max_length=11, null=True, verbose_name='Telefone Contato')),
                ('num_doc', models.CharField(blank=True, max_length=20, null=True, verbose_name='N° Documento')),
                ('obs', models.TextField(blank=True, null=True, verbose_name='Observação')),
                ('situacao', models.CharField(choices=[('ATIVO', 'Ativo'), ('INATIVO', 'Inativo'), ('DE_ALTA', 'Alta Médica'), ('FALECIDO', 'Falecido')], default='ATIVO', max_length=8, verbose_name='Situação')),
                ('sexo', models.CharField(choices=[('M', 'Masculino'), ('F', 'Feminino'), ('N', 'Não Informado')], default='N', max_length=1)),
                ('data_nascimento', models.DateField(blank=True, null=True, verbose_name='Dt. Nascimento')),
                ('data_cadastro', models.DateField(auto_now_add=True, verbose_name='Dt. Cadastro')),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('cep', models.CharField(max_length=8)),
                ('logradouro', models.CharField(max_length=100)),
                ('numero', models.CharField(max_length=10)),
                ('complemento', models.CharField(blank=True, max_length=25, null=True)),
                ('bairro', models.CharField(max_length=50)),
                ('cidade', models.CharField(max_length=50)),
                ('uf', models.CharField(max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(max_length=100, verbose_name='Descrição')),
                ('especificacao', models.CharField(max_length=20, verbose_name='Especificação')),
            ],
        ),
        migrations.CreateModel(
            name='TipoTratamento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(max_length=50, unique=True, verbose_name='Descrição')),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_cadastro', models.DateTimeField(auto_now_add=True)),
                ('data_liberacao', models.DateField(blank=True, null=True)),
                ('reference', models.CharField(editable=False, max_length=14)),
                ('paciente', models.ForeignKey(db_column='paciente_id', on_delete=django.db.models.deletion.PROTECT, to='api.Paciente', verbose_name='Paciente')),
            ],
        ),
        migrations.AddField(
            model_name='paciente',
            name='tipo_tratamento',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.TipoTratamento'),
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantidade', models.PositiveSmallIntegerField(default=1, validators=[django.core.validators.MinValueValidator(limit_value=1, message='O item precisa ter quantidade superior a 0.')])),
                ('pedido', models.ForeignKey(db_column='pedido_id', on_delete=django.db.models.deletion.CASCADE, related_name='itens', to='api.Pedido', verbose_name='Pedido')),
                ('produto', models.ForeignKey(db_column='produto_id', on_delete=django.db.models.deletion.PROTECT, to='api.Produto', verbose_name='Produto')),
            ],
        ),
        migrations.CreateModel(
            name='Beneficio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantidade', models.PositiveSmallIntegerField(default=1)),
                ('periodo', models.IntegerField(choices=[(30, 'Mensal'), (15, 'Quinzenal'), (7, 'Semanal'), (1, 'Indefinido')], default=7)),
                ('data_ultimo_lancamento', models.DateField(blank=True, null=True, verbose_name='Dt último lançamento')),
                ('paciente', models.ForeignKey(db_column='paciente_id', on_delete=django.db.models.deletion.PROTECT, to='api.Paciente', verbose_name='Paciente')),
                ('produto', models.ForeignKey(db_column='produto_id', on_delete=django.db.models.deletion.PROTECT, to='api.Produto', verbose_name='Produto')),
            ],
        ),
    ]
