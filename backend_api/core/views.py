from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from .models import Todo
from .serializers import TodoSerializer


def home(request):
    return render(request, "home.html")


@api_view(["GET", "POST"])
def todos_list(request):
    if request.method == "GET":
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        name = request.data.get("name")
        todo = Todo.objects.create(name=name)
        serializer = TodoSerializer(todo, many=False)
        return Response(serializer.data)
