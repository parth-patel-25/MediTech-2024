from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from UserData.models import PatientData
from UserData.models import DoctorData

@csrf_exempt
def PatientUserData(requests):
    if requests.method == 'POST':
        try :
            data = json.loads(requests.body)
            firstname = data['data']['firstname']
            lastname = data['data']['lastname']
            age = data['data']['age']
            gender = data['data']['gender']
            phone = data['data']['phone']
            gmail = data['data']['gmail']
            address = data['data']['address']
            em_contact_name = data['data']['Em_contact_name']
            em_phone_number = data['data']['Em_phone_number']
            print(firstname, lastname, age, gender, phone, gmail, address, em_contact_name, em_phone_number)

            # saving data into database
            patient_data = PatientData(
                firstname=firstname, 
                lastname=lastname,
                age=age,
                gender=gender,
                phone=phone,
                gmail=gmail,
                address=address,
                em_contact_name=em_contact_name,
                em_phone_number=em_phone_number
            )

            patient_data.save()
            print("Data has been stored...!")
            return JsonResponse({'message' : 'Data Received Successfully'})
        except json.JSONDecodeError:
            # If the JSON data is invalid, return an error response
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error' : 'Only POST requests are allowed'})


@csrf_exempt
def DoctorUserData(requests):
    if requests.method == 'POST':
        try :
            data = json.loads(requests.body)
            firstname = data['data']['firstname']
            lastname = data['data']['lastname']
            age = data['data']['age']
            gender = data['data']['gender']
            phone = data['data']['phone']
            gmail = data['data']['gmail']
            address = data['data']['address']
            specialization = data['data']['Specialization']
            license_num = data['data']['license']
            education = data['data']['education']
            job_title = data['data']['jobTitle']
            hospital = data['data']['hospital']
            start_date = data['data']['startDate']
            end_date = data['data']['endDate']
            textarea = data['data']['textarea']
            print(firstname, lastname, age, gender, phone, gmail, address, specialization, license_num, education, job_title, hospital, start_date, end_date, textarea)

            # storing data into database
            doctor_data = DoctorData(
                firstname=firstname,
                lastname=lastname,
                age=age,
                gender=gender,
                phone=phone,
                gmail=gmail,
                address=address,
                specialization=specialization,
                license_num=license_num,
                education=education,
                job_title=job_title,
                hospital=hospital,
                start_date=start_date,
                end_date=end_date,
                textarea=textarea
            )

            doctor_data.save()
            print("Data has been stored...!")

            return JsonResponse({'message' : 'Data Received Successfully'})
        except json.JSONDecodeError:
            # If the JSON data is invalid, return an error response
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error' : 'Only POST requests are allowed'})
