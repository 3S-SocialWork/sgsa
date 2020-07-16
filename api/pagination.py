from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination


class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 25


class CustomPageNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
