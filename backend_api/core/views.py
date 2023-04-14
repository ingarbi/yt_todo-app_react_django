from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from .models import Todo


def home(request):
    return render(request, "home.html")


def todos_list(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer()
