from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('todos/', views.todos_list, name='todos_list'),

]
