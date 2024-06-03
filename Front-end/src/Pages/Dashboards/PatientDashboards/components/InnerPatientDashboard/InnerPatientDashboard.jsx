import React from 'react'
import "./InnerPatientDashboard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import PatientDoctorImage from "../../../../../assets/Online Doctor-amico.svg"

const InnerPatientDashboard = ({firstname, lastname}) => {
  return (
    <div className='Inner-Patient-Dashboard'>
        <div className='welcome-patient-page'>
            <h1>Hi, <span className='patient-name'>{firstname} {lastname}!</span></h1>
            <p>We created account for you. <br /> Feel free to eplore our app and remember to stay humble.</p>
        </div>
        <div className='between-section'>
            <div className='titleHealth'>
                <h1>Keep track of your <br />health easily </h1>
                <p>Online consultation that you can do anywhere. <br /> our specialists are always in touch!</p>
                <div className='patientInputBox'>
                    <input type="text" placeholder='Find the best doctors'/>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={{ fontSize: "40px" }} />
                </div>
                <div className='last-Para-Patient'>
                    <div>It is thorugh interaction and engagement with the <br /> communitites we serve that we will be nimble to <br /> meet those needs </div>
                    <div>Read More</div>
                </div>
            </div>
            <div className='Patient-doctor-image'>
                <img src={PatientDoctorImage} alt="Patient Doctor Interaction" />
            </div>
        </div>
    </div>
  )
}

export default InnerPatientDashboard