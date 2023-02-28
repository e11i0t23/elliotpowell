from django.contrib import admin

from .models import Work, Language, Framework, ContactMessage
# Register your models here.
admin.site.register(Work)
admin.site.register(Language)
admin.site.register(Framework)
admin.site.register(ContactMessage)