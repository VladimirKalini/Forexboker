from django.db import models

class User(models.Model):
    email           = models.CharField(max_length=255, unique=True)
    hashed_password = models.CharField(max_length=128)
    first_name      = models.CharField(max_length=64)
    last_name       = models.CharField(max_length=64)
    country         = models.CharField(max_length=64)
    phone           = models.CharField(max_length=20, null=True, blank=True, unique=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'users'
        verbose_name = 'Лида'
        verbose_name_plural = 'Лиды'
