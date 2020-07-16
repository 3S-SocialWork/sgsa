from rest_framework import serializers, status
from datetime import date, datetime, timedelta
from django.db.models import Sum
from .exceptions import LimiteBeneficioLiberadoExtrapoladoPorPeriodo
from .models import (
    TipoTratamento, Produto, Paciente,
    Beneficio, Pedido, Item
)


class TipoTratamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoTratamento
        fields = '__all__'


class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'


class BeneficioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beneficio
        fields = '__all__'


class PacienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Paciente
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = '__all__'
        extra_kwargs = {'pedido': {'required': False}}


class PedidoSerializer(serializers.ModelSerializer):

    itens = ItemSerializer(many=True)

    class Meta:
        model = Pedido
        fields = ('id', 'paciente', 'data_cadastro',
                  'data_liberacao', 'reference', 'itens')
        extra_kwargs = {'itens_pedido': {'required': False},
                        'reference': {'required': False}}

    def validar(self, paciente_id, itens):
        for item in itens:
            produto_id = item['produto'].id
            try:
                beneficio = Beneficio.objects.get(
                    paciente=paciente_id,
                    produto=produto_id,
                )
            except Exception as inst:
                beneficio = None

            if beneficio and beneficio.data_ultimo_lancamento:
                end_date = datetime.combine(date.today(), datetime.max.time())
                start_date = end_date - timedelta(days=beneficio.periodo)
                start_date = datetime.combine(start_date, datetime.min.time())

                check_item = Item.objects.select_related('pedido')\
                    .values('produto__id')\
                    .annotate(total=Sum('quantidade'))\
                    .filter(
                        produto__id=produto_id,
                        pedido__paciente__id=paciente_id,
                        pedido__data_cadastro__range=(start_date, end_date)
                )

                liberados = 0 if not check_item.exists() else check_item[0]['total']
                total = liberados + item['quantidade']
                if total > beneficio.quantidade:
                    raise LimiteBeneficioLiberadoExtrapoladoPorPeriodo

    def create(self, validated_data):
        itens = validated_data.pop('itens', None)
        paciente = validated_data.get('paciente')
        self.validar(paciente.id, itens)
        pedido = Pedido.objects.create(**validated_data)
        for item in itens:
            item['pedido'] = pedido
            Item.objects.create(**item)
        return pedido

    def update(self, instance, validated_data):
        validated_data.pop('itens', None)
        return super().update(instance, validated_data)
