from django.contrib import admin
from django.urls import path, include 
from UserData.views import PatientUserData
from UserData.views import DoctorUserData

urlpatterns = [
    path('jet/', include('jet.urls', 'jet')),  # Django JET URLS
    path('admin/', admin.site.urls),
    path('PatientUserData/', PatientUserData),
    path('DoctorUserData/', DoctorUserData)
]
