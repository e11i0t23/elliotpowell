from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings
import json

from .models import Work, Language, ContactMessage

# Create your views here.
def index(request):
    return render(request, "portfolio/index.html")

def work(request):
    work = [project.serialize() for project in Work.objects.all().order_by('-id')]
    return JsonResponse({"work":work})

def skills(request):
    skills = [lang.serialize() for lang in Language.objects.all().order_by('-id')]
    return JsonResponse({"skills":skills})

def contact(request):
    if request.method=="POST":
        data = json.loads(request.body)
        print(data)
        c = ContactMessage(**data)
        c.save()
        if settings.EMAIL:
            subject = f'{c.name} with email {c.email} sent a new message with subject {c.subject}'
            message = f'{c.message}'
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [settings.EMAIL_NOTIFICATION_RECIEVER,]
            send_mail( subject, message, email_from, recipient_list )

        return JsonResponse({"message":"Successfully posted"}, status=200)
    else:
        return JsonResponse({"error":"invalid operation"}, status=400)