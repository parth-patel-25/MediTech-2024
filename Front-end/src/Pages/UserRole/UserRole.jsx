import React from 'react'
import '../UserRole/UserRole.css'
import Patient from '../../assets/patient.jpg'
import Doctor from '../../assets/doctor.jpg'
import {Link} from "react-router-dom"

const UserRole = () => {
  return (
    <div className='User-Role'>
        <div className='main-box'>
            <div className='center-box'>
                <h1>Select Your Role</h1>
                <div className='content-data'>

                    {/* Patient Link  */}
                    <Link to="/PatientDetailsForm" style={{ textDecoration: "none" }}>
                        <div className='user-box'>
                            <div className='user-inner-box'>
                                <h3>Patient</h3>
                                <div>
                                    <img className='patient-img' src={Patient} alt="" />
                                </div>
                                <p>A patient is an individual who seeks medical attention or care from healthcare professionals due to an ailment, injury, or concern about their health and well-being. </p>
                            </div>
                        </div>
                    </Link>

                    {/* Doctor Link  */}
                    <Link to="/DoctorDetailsForm" style={{ textDecoration: "none" }}>
                        <div className='user-box'>
                            <div className='user-inner-box'>
                                <h3>Doctor</h3>
                                <div>
                                    <img  src={Doctor} alt="" />
                                </div>
                                <p>A doctor is a highly skilled and dedicated professional who specializes in the diagnosis, treatment, and care of individuals' health and well-being.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserRole