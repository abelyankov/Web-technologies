from django_filters import rest_framework as filters
from todoApi.models import TaskList


class TaskListFilter(filters.FilterSet):
    created_by = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = TaskList
        fields = ('created_by',)