from django.shortcuts import render
from django.http import JsonResponse
import json

from .models import Work, Language, ContactMessage

# Create your views here.
def index(request):
    return render(request, "portfolio/index.html")

def work(request):
    work = [project.serialize() for project in Work.objects.all()]
    return JsonResponse({"work":work})

def skills(request):
    skills = [lang.serialize() for lang in Language.objects.all()]
    return JsonResponse({"skills":skills})

def contact(request):
    if request.method=="POST":
        data = json.loads(request.body)
        print(data)
        c = ContactMessage(**data)
        c.save()
        return JsonResponse({"message":"Successfully posted"}, status=200)
    else:
        return JsonResponse({"error":"invalid operation"}, status=400)