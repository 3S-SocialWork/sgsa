from django.urls import include, path, re_path
from rest_framework import routers
from . import views
from .auth import login, logout

router = routers.DefaultRouter()
router.register(r'tipos-tratamento', views.TipoTratamentoViewSet)
router.register(r'beneficios', views.BeneficioViewSet)
router.register(r'produtos', views.ProdutoViewSet)
router.register(r'pacientes', views.PacienteViewSet)
router.register(r'pedidos', views.PedidoViewSet)
router.register(r'pedido-itens', views.ItemViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api/login', login),
    path('api/logout', logout),
]
