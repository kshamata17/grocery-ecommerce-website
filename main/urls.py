from django.urls import path, include
from . import views


urlpatterns = [

    path('', views.mainHome, name='main-home'),
    path('products/', views.products, name='main-products'),

]