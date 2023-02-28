from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),

    # api
    path("api/work", views.work),
    path("api/skills", views.skills),
    path("api/contact", views.contact),
]