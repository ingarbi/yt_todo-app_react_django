from django.db import models


class Todo(models.Model):
    name = models.CharField(max_length=200)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
