import React, { useEffect, useState } from 'react'
import './DoctorDashbords.css'
import { useLocation } from "react-router-dom"
import MaleImage from "../../../assets/Male Image.jpg"
import FemaleImage from "../../../assets/Female Image.jpg"
import { useAuth0 } from "@auth0/auth0-react";
import InnerDoctorDashboard from './components/InnerDoctorDashboard/InnerDoctorDashboard'
import DoctorOverview from '../DoctorDashboards/components/ProfileOverview/ProfileOverview'
// import DataInputSection from './components/DataInputSection/DataInputSection'
import FeedBackSurveys from '../PatientDashboards/components/FeedbackSurveys/FeedBackSurveys'
import { useNavigate } from "react-router-dom"

const DoctorDashbords = () => {

    const location = useLocation()

    const { logout } = useAuth0()
    


    console.log("Data from previous component...!");
    console.log(location.state);

    const [indicatorValue, SetIndicatorValue] = useState(null)
    const [componentValue, setComponentValue] = useState(1)

    const [componentPositionOne, setComponentPositionOne] = useState('0em')
    const [componentPositionTwo, setComponentPositionTwo] = useState('100em')
    const [componentPositionSix, setComponentPositionSix] = useState('200em')

    const indicatorSlider = (index) => {
        switch (index) {
            case 1:
                SetIndicatorValue('19px')
                setComponentValue(1)
                setComponentPositionOne('0em')
                setComponentPositionTwo('100em')
                setComponentPositionSix('200em')
                break
            case 2:
                SetIndicatorValue('76px')
                setComponentValue(2)
                setComponentPositionTwo('0em')
                setComponentPositionOne('-100em')
                setComponentPositionSix('200em')
                break;
            case 3:
                setComponentValue(3)
                SetIndicatorValue('136px')
                break;
            case 4:
                setComponentValue(4)
                SetIndicatorValue('195px')
                break;
            case 5:
                setComponentValue(5)
                SetIndicatorValue('254px')
                break; 
            case 6:
                SetIndicatorValue('315px')
                setComponentValue(6)
                setComponentPositionSix('-2.5em')
                setComponentPositionOne('-200em')
                break; 
            case 7:
                SetIndicatorValue('505px')
                break; 
            default:
                break;
        }
    }


  return (
    <div className='PatientDashbords'>
        <div className='patient-left-section' style={{ position: `${componentValue == 2 ? "fixed":"static"}` }}>
            <div className='avatar-section'>
                <div className='avatar'>
                    {location.state.gender === 'Male' ? (
                        location.state.selectedImageUrl ? <img src={location.state.selectedImageUrl} width="100px" height="100px" style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "" }}/>:<img src={MaleImage} alt="Male Image Logo" width="100px" height="100px" style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "0% 10%" }}/>
                    ) : location.state.gender === 'Female' ? (
                        location.state.selectedImageUrl ? <img src={location.state.selectedImageUrl} width="100px" height="100px" style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "" }}/>:<img src={FemaleImage} alt="Female Image Logo" width="100px" height="100px" style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "0% 10%" }}/>
                    ) :null}
                </div>
            </div>
            <div className='center-avatar-name'>
                <div>{location.state.newFirstName ? location.state.newFirstName:location.state.firstname}  {location.state.newLastName ? location.state.newLastName:location.state.lastname}</div>
            </div>
            <div className='patient-navigation-menu'>
                <span className='patient-navigation' style={{ fontSize: "12px" }}>NAVIGATION</span>
                <div className='patient-menu' onClick={() => indicatorSlider(1)}>
                    <i></i>
                    <div>Dashboard</div>
                </div>
                <div className='patient-menu' onClick={() => indicatorSlider(2)}>
                    <i></i>
                    <div>Profile Overview</div>
                </div>
                <div className='patient-menu' onClick={() => indicatorSlider(3)}>
                    <i></i>
                    <div>Patient Lists</div>
                </div>
                <div className='patient-menu' onClick={() => indicatorSlider(4)}>
                    <i></i>
                    <div>CHAT</div>
                </div>
                <div className='patient-menu' onClick={() => indicatorSlider(5)}>
                    <i></i>
                    <div>GPT Powered Access Key</div>
                </div>
                <div className='patient-menu' onClick={() => indicatorSlider(6)}>
                    <i></i>
                    <div>Feedback Surveys</div>
                </div>
                <div className='patient-menu patient-logout'  onClick={() => {indicatorSlider(7), logout(
                    { 
                        logoutParams: { 
                            returnTo: "http://localhost:5173",
                            client_id: "hgCIqMEeKT9YDH4DWhCswuW1UKwf3UpD" 
                        }    
                    }
                )}}>Log Out</div>
                <span className='extra' style={{ top: `${indicatorValue}`, transition: "all .5s"}}></span>
            </div>
        </div>
        <div className='patient-right-section' style={{ position: "relative", overflow: `${componentValue === 2 ? "":"hidden"}`}}>
                <div style={{  position: "relative", top: `${componentPositionOne}`, transition: "all 1s"}}>
                    {componentValue == 1 ? <InnerDoctorDashboard/>:null}
                </div>

                <div style={{  position: "relative", left: "19em", marginTop: `${componentValue == 2 ? "20px":""}`, paddingBottom: "40px",  top: `${componentPositionTwo}`, transition: "all 1s"}}>
                    {componentValue == 2 ? <DoctorOverview/>:null}
                </div>

                <div style={{  position: "relative", top: `${componentPositionSix}`, transition: "all 1s"}}>
                    {componentValue == 6 ? <FeedBackSurveys/>:null}
                </div>
                {console.log(componentValue)}
        </div>
    </div>
  )
}

export default DoctorDashbords