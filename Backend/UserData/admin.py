from django.contrib import admin
from UserData.models import PatientData
from UserData.models import DoctorData

class PatientDataAdmin(admin.ModelAdmin):
    list_display = ['uuid','firstname', 'lastname', 'age', 'gender', 'phone', 'gmail', 'address', 'em_contact_name', 'em_phone_number']

class DoctorDataAdmin(admin.ModelAdmin):
    list_display = ['uuid','firstname', 'lastname', 'age', 'gender', 'phone', 'gmail', 'address', 'specialization', 'license_num', 'education', 'job_title', 'hospital', 'start_date', 'end_date', 'textarea']


admin.site.register(PatientData, PatientDataAdmin)
admin.site.register(DoctorData, DoctorDataAdmin)