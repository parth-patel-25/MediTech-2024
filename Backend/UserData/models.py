from django.db import models
import uuid

class PatientData(models.Model):
    uuid = models.UUIDField(unique=True, default=uuid.uuid4)
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    phone = models.CharField(max_length=15)
    gmail = models.EmailField()
    address = models.CharField(max_length=255)
    em_contact_name = models.CharField(max_length=100)
    em_phone_number = models.CharField(max_length=15)  

class DoctorData(models.Model):
    uuid = models.UUIDField(unique=True, default=uuid.uuid4)
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    phone = models.CharField(max_length=15)
    gmail = models.EmailField()
    address = models.CharField(max_length=255)
    specialization = models.CharField(max_length=100)
    license_num = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
    job_title = models.CharField(max_length=100)
    hospital = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    textarea = models.TextField()
