from rest_framework.exceptions import APIException, status
from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response is not None:
        messages = {}
        if isinstance(exc, APIException):
            if isinstance(exc.detail, (list, dict)):
                for key in exc.detail:
                    messages[key] = exc.detail[key]

                response.data = {'message': messages}
            else:
                response.data = {'message': exc.detail}

        response.data['status_code'] = response.status_code

    return response


class LimiteBeneficioLiberadoExtrapoladoPorPeriodo(APIException):
    status_code = status.HTTP_412_PRECONDITION_FAILED
    default_detail = "Não é permitido a liberação de benefícios acima do estipulado no período."
    default_code = "precondicao_falhou"
