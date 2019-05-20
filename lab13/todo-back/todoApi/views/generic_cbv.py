from django.http import Http404
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.pagination import LimitOffsetPagination
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from todoApi.models import TaskList, Task
from todoApi.serializers import TaskListSerializer2, TaskSerializer
from todoApi.filters import TaskListFilter


class TaskLists(generics.ListCreateAPIView):
    serializer_class = TaskListSerializer2
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )
    pagination_class = LimitOffsetPagination
    filter_backends = (DjangoFilterBackend,
                       filters.SearchFilter,
                       filters.OrderingFilter)

    # TODO DjangoFilterBackend
    filter_class = TaskListFilter
    filterset_fields = ('token',)

    # ordering = ('created_by',)

    def get_queryset(self):
        return TaskList.objects.for_user(self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class TaskListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer2
    permission_classes = (IsAuthenticated,)


class TaskListOfTask(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Task.objects.for_user(self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
