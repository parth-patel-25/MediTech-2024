import React, { useEffect, useState } from 'react'
import './PatientDashbords.css'
import { useLocation } from "react-router-dom"
import MaleImage from "../../../assets/Male Image.jpg"
import FemaleImage from "../../../assets/Female Image.jpg"
import { useAuth0 } from "@auth0/auth0-react";
import InnerPatientDashboard from './components/InnerPatientDashboard/InnerPatientDashboard'
import PatientOverview from '../PatientDashboards/components/ProfileOverview/ProfileOverview'
import DataInputSection from './components/DataInputSection/DataInputSection'
import FeedBackSurveys from './components/FeedbackSurveys/FeedBackSurveys'
import { useNavigate } from "react-router-dom"

const PatientDashbords = () => {

    const location = useLocation()

    const { logout } = useAuth0()
    


    console.log("Data from previous component...!");
    console.log(location.state);

    const [indicatorValue, SetIndicatorValue] = useState(null)
    const [componentValue, setComponentValue] = useState(1)
    const [componentPositionOne, setComponentPositionOne] = useState(0)
    const [componentPositionTwo, setComponentPositionTwo] = useState('100em')
    const [componentPositionThree, setComponentPositionThree] = useState('200em')
    const [componentPositionSix, setComponentPositionSix] = useState('600em')

    const [leftComponentFixedPosition, setLeftComponentFixedPosition] = useState('static')
    const [rightComponentOverFlow, setRightComponentOverFlow] = useState('hidden')
    

    const indicatorSlider = (index) => {
        switch (index) {
            case 1:
                SetIndicatorValue('19px')
                setComponentValue(1)
                setComponentPositionOne('0em')
                setComponentPositionTwo('100em')
                setComponentPositionThree('150em')
                setComponentPositionSix('200em')
                setRightComponentOverFlow('hidden')
                setLeftComponentFixedPosition('static')
                break
            case 2:
                SetIndicatorValue('76px')
                setComponentPositionTwo('-40em')
                setComponentPositionOne('-100em')
                setComponentPositionThree('150em')
                setComponentPositionSix('200em')
                setRightComponentOverFlow('hidden')
                setLeftComponentFixedPosition('static')
                break;
            case 3:
                SetIndicatorValue('136px')
                setComponentPositionThree('-85em')
                setComponentPositionTwo('-100em')
                setComponentPositionOne('-200em')
                setComponentPositionSix('200em')
                setRightComponentOverFlow('visible')
                if (rightComponentOverFlow == 'hidden') {

                    setTimeout(() => {
                        setLeftComponentFixedPosition('fixed')
                    }, 500);
                }
                
                break;
            case 4:
                SetIndicatorValue('195px')
                break;
            case 5:
                SetIndicatorValue('254px')
                break;
            case 6:
                SetIndicatorValue('313px')
                setComponentPositionSix('-135em')
                setComponentPositionOne('-700em')
                setComponentPositionTwo('-500em')
                setComponentPositionThree('-300em')
                setRightComponentOverFlow('hidden')
                setLeftComponentFixedPosition('static')
                break; 
            case 7:
                SetIndicatorValue('502px')         
                break;         
            default:
                break;
        }
    }


  return (
    <div className='PatientDashbords'>
        <div className='patient-left-section' style={{  position: `${leftComponentFixedPosition}`}}>
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
                    <div>Data Input Section</div>
                </div>
                <div className='patient-menu' onClick={() => indicatorSlider(4)}>
                    <i></i>
                    <div>CHAT</div>
                </div>
                <div className='patient-menu' onClick={() => indicatorSlider(5)}>
                    <i></i>
                    <div>Emergency</div>
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
        <div className='patient-right-section' style={{ position: "relative", overflow: `${rightComponentOverFlow}` }}>

                <div style={{ position: "relative", top: `${componentPositionOne}`,  transition: "all 1s"}}>
                    <InnerPatientDashboard />
                </div>

                <div style={{  position: "relative", top: `${componentPositionTwo}`,  transition: "all 1s"}}>
                    <PatientOverview />
                </div>

                <div style={{  position: "relative", left: `${leftComponentFixedPosition == 'fixed' ? "300px":"0px"}`, top: `${componentPositionThree}`,  transition: "all 1s"}}>
                    <DataInputSection />
                </div>

                <div style={{  position: "relative", top: `${componentPositionSix}`,  transition: "all 1s"}}>
                    {leftComponentFixedPosition == 'fixed' ? null: <FeedBackSurveys />}
                </div> 
                

        </div>
    </div>
  )
}

export default PatientDashbords