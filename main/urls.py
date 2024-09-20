from django.urls import path, include
from . import views


urlpatterns = [

    path('', views.mainHome, name='main-home'),
    path('products/', views.products, name='main-products'),
    path('product-detail/', views.productDetail, name='main-product-detail'),
    path('catalogue/', views.catalogue, name='main-catalogue'),

]