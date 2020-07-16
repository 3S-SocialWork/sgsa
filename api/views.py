from rest_framework import viewsets, filters, status
from filters.mixins import FiltersMixin
from rest_framework.response import Response
from rest_framework.decorators import action

from .serializers import (
    TipoTratamentoSerializer, ProdutoSerializer,
    PacienteSerializer, BeneficioSerializer,
    PedidoSerializer, ItemSerializer
)

from .models import (
    TipoTratamento, Produto,
    Paciente, Beneficio,
    Pedido, Item
)


class TipoTratamentoViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = TipoTratamento.objects.all()
    serializer_class = TipoTratamentoSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('id', 'descricao')
    ordering = ('id',)

    filter_mappings = {
        'id': 'id',
        'descricao': 'descricao__icontains',
    }


class ProdutoViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('id', 'descricao')
    ordering = ('id',)

    filter_mappings = {
        'id': 'id',
        'descricao': 'descricao__icontains',
    }


class BeneficioViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Beneficio.objects.all()
    serializer_class = BeneficioSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('paciente')
    ordering = ('paciente',)

    filter_mappings = {
        'paciente': 'paciente',
        'produto': 'produto',
    }


class PedidoViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('paciente')
    ordering = ('data_cadastro', 'paciente',)

    filter_mappings = {
        'paciente': 'paciente',
        'data_cadastro': 'data_cadastro'
    }

    @action(detail=True)
    def itens(self, request, pk=None):
        queryset = Item.objects.filter(pedido=pk)
        serializer = ItemSerializer(queryset,
                                    context={'request': request},
                                    many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ItemViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('pedido')
    ordering = ('pedido',)

    filter_mappings = {
        'pedido': 'pedido',
    }


class PacienteViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('id', 'nome', 'data_cadastro')
    ordering = ('id',)

    filter_mappings = {
        'id': 'id',
        'nome': 'nome__icontains',
        'cidade': 'cidade__icontains',
        'situacao': 'situacao',
        'tipo_tratamento': 'tipo_tratamento__descricao__icontains'
    }

    @action(detail=True)
    def beneficios(self, request, pk=None):
        queryset = Beneficio.objects.filter(paciente=pk)
        serializer = BeneficioSerializer(queryset,
                                         context={'request': request},
                                         many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True)
    def ordens(self, request, pk=None):
        queryset = Pedido.objects.filter(paciente=pk)
        serializer = PedidoSerializer(queryset,
                                      context={'request': request},
                                      many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
