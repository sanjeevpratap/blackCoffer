from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from datetime import datetime




class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        is_superuser = extra_fields.pop("is_superuser", False)
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    
    REQUIRED_FIELDS=[]

    def __str__(self):
        return self.email
    def get_full_name(self):
        return name
    def has_perm(self,perm,obj=None):
        "Does the user a specific permission?"
        return self.is_staff
    def has_module_perms(self,app_Label):
        "Does the user have permission ot view the app `app_Label`?"
        return True
    


class DataEntry(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    end_year = models.CharField(max_length=10, null=True)
    intensity = models.IntegerField(null=True)
    sector = models.CharField(max_length=100, null=True)
    topic = models.CharField(max_length=100, null=True)
    insight = models.TextField(null=True)
    url = models.URLField(null=True)
    region = models.CharField(max_length=100, null=True)
    start_year = models.CharField(max_length=10, null=True)
    impact = models.CharField(max_length=100, null=True)
    added = models.DateTimeField(auto_now_add=True, null=True)  # Set the current datetime on creation
    # published = models.DateTimeField(null=True, blank=True)  # Allow null and blank
    published = models.DateTimeField(null=True, blank=True)

    country = models.CharField(max_length=100, null=True)
    relevance = models.IntegerField(null=True)
    pestle = models.CharField(max_length=100, null=True)
    source = models.CharField(max_length=100, null=True)
    title = models.TextField(null=True)
    likelihood = models.IntegerField(null=True)

    def __str__(self):
        return self.title

