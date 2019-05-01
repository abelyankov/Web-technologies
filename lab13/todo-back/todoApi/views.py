from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from todoApi.models import TaskList
from todoApi.serializers import TaskListSerializer2
from django.views.decorators.csrf import csrf_exempt


# def list(request):
#     tasks = TaskList.objects.all()
#     json_tasks = [task.to_json_list() for task in tasks]
#     return JsonResponse(json_tasks, safe=False)
#
#
# def list_id(request, pk):
#     try:
#         tasks_id = TaskList.objects.get(id=pk)
#     except TaskList.DoesNotExit as e:
#         return JsonResponse({'error': str(e)}, safe=False)
#     return JsonResponse(tasks_id.to_json_list(), safe=False)
#
#
# def task(request, pk):
#     try:
#         t_task = TaskList.objects.get(id=pk)
#     except Task.DoesNotExit as e:
#         return JsonResponse({'error': str(e)}, safe=False)
#     json_t_task = [t.to_json_detail() for t in t_task.tasks.all()]
#     return JsonResponse(json_t_task, safe=False)
#
#
#
# def task_detail(request, pk):
#     try:
#         detail = Task.objects.get(id=pk)
#     except Task.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, safe=False)
#     return JsonResponse(detail.to_json_detail())

class TaskLists(APIView):
    def get(self, request):
        taskList = TaskList.objects.all()
        serializer = TaskListSerializer2(taskList, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TaskListSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TaskListDetail(APIView):

    def get_object(self, pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        taskList = self.get_object(pk)
        serializer = TaskListSerializer2(taskList)
        return Response(serializer.data)

    def put(self, request, pk):
        taskList = self.get_object(pk)
        serializer = TaskListSerializer2(instance=taskList, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        taskList = self.get_object(pk)
        taskList.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)