from django.db import models

# Create your models here.
class Work(models.Model):
    title = models.CharField(max_length=32)
    url = models.URLField()
    codeUrl = models.URLField(null=True, blank=True)
    description = models.TextField(blank=True)

    def serialize(self):
        return {
            "title": self.title,
            "url": self.url,
            "codeUrl": self.codeUrl,
            "description": self.description
        }
    
    def __str__(self) -> str:
        return f"{self.title}: {self.url}"
    

class Language(models.Model):
    class Textures(models.IntegerChoices):
        PYTHON = 0
        TYPESCRIPT = 1
        CSS = 2
        DJANGO = 3
        EXPRESS = 4
        GIT = 5
        HTML = 6
        JAVASCRIPT = 7
        MARKDOWN = 8
        REACT = 9
        SQL = 10
        THREEJS = 11
        BLANK = 1000
    
    texture = models.IntegerField(choices=Textures.choices)
    title = models.CharField(max_length=32)
    url = models.URLField()

    def serialize(self):
        return {
            "title": self.title,
            "url": self.url,
            "texture": self.texture,
            "frameworks": [framework.serialize() for framework in self.Frameworks.all()]
        }
    
    def __str__(self) -> str:
        return f"{self.title}: {self.url}"
class Framework(models.Model):
    class Textures(models.IntegerChoices):
        PYTHON = 0
        TYPESCRIPT = 1
        CSS = 2
        DJANGO = 3
        EXPRESS = 4
        GIT = 5
        HTML = 6
        JAVASCRIPT = 7
        MARKDOWN = 8
        REACT = 9
        SQL = 10
        THREEJS = 11
        BLANK = 1000
    
    texture = models.IntegerField(choices=Textures.choices)
    title = models.CharField(max_length=32)
    url = models.URLField()
    language = models.ForeignKey("portfolio.Language", on_delete=models.CASCADE, related_name="Frameworks")

    def serialize(self):
        return {
            "title": self.title,
            "url": self.url,
            "texture": self.texture
        }
    
    def __str__(self) -> str:
        return f"{self.title}: {self.url}"
    
class ContactMessage(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField()
    subject = models.CharField(max_length=64)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Message From: {self.name} with subject: {self.subject}"