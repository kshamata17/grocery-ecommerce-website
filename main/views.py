from django.shortcuts import render

# Create your views here.
def mainHome(request):
    return render(request, 'main/home.html')