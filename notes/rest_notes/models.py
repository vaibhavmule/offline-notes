from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    client_id = models.CharField(max_length=100, db_index=True)
    user = models.ForeignKey(User)
    note = models.TextField(max_length=1000, db_index=True)
    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
