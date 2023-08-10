from django.urls import path
from . import views

urlpatterns=[
    path('',views.index,name='index'),
    path('add_chart/',views.add_chart,name='add_chart'),
]