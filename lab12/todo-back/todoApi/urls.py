from django.urls import path
from todoApi import views

urlpatterns = [
    path('task_lists/', views.TaskLists.as_view()),
    path('task_lists/<int:pk>/', views.TaskListDetail.as_view())
    # path('task_lists/<int:pk>/tasks/', views.task),
    # path('tasks/<int:pk>', views.task_detail)
]
