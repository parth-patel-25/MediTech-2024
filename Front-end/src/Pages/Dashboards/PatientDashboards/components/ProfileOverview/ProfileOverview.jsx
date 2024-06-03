import React, {useEffect} from 'react'
import "./ProfileOverview.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MaleAvatar from "../../../../../assets/Male Image.jpg"
import FemaleAvatar from "../../../../../assets/Female Image.jpg"
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageUploadButton from "../ProfileOverview/components/ImageUploadButton"

const ProfileOverview = () => {

  const location = useLocation()

  const [firstname, setFirstname] = useState(location.state.firstname)
  const [lastname, setLastname] = useState(location.state.lastname)
  const [age, setAge] = useState(location.state.age)
  const [gender, setGender] = useState(location.state.gender)
  const [phone, setPhone] = useState(location.state.phone)
  const [gmail, setGmail] = useState(location.state.gmail)
  const [emContact, setEmContact] = useState(location.state.Em_contact_name)
  const [emNumber, setEmNumber] = useState(location.state.Em_phone_number)
  const [address, setAddress] = useState(location.state.address)

  const [radioChecked, SetRadioChecked] = useState("checked")
  const [inputBoxDisabled, SetinputBoxDisabled] = useState(true)
  const [inputBoxTextColor, setInputBoxTextColor] = useState('rgb(141, 141, 141)')
  const [inputBoxLabelColor, setInputBoxLabelColor] = useState('black')
  const [inputBoxBorderColor, setInputBoxBorderColor] = useState('rgb(163, 163, 163)')

  const navigate = useNavigate()
  
  useEffect(() => {
    if(location.state) {
      location.state["newFirstName"] = firstname
      location.state["newLastName"] = lastname
      navigate("/PatientDashboard", location)
    }
    // console.log(firstname);
  }, [firstname, lastname])
  

  const editFunction = (event, takeValue) => {
      
      SetinputBoxDisabled(false)
      setInputBoxTextColor('black')
      setInputBoxLabelColor('rgb(141, 141, 141)')
      setInputBoxBorderColor('#AD2CF0')
      switch (takeValue) {
        case "firstname":
          setFirstname(event.target.value)
          break;
        case "age":
          setAge(event.target.value)
          break;
        case "phone":
          setPhone(event.target.value)
          break;
        case "emContact":
          setEmContact(event.target.value)
          break;
        case "address":
          setAddress(event.target.value)
          break;
        case "lastname":
          setLastname(event.target.value)
          break;
        case "gmail":
          setGmail(event.target.value)
          break;
        case "emNumber":
          setEmNumber(event.target.value)
          break;
        default:
          break;
      }   
  }

  const cancelChanges = () => {
    SetinputBoxDisabled(true)
    setInputBoxLabelColor('black')
    setInputBoxTextColor('rgb(141, 141, 141)')
    setInputBoxBorderColor('rgb(163, 163, 163)')
  }

  const [imageComponent, setImgeComponent] = useState(false)
  const [DisplayImageComponent, setDisplayImgeComponent] = useState("")

  const callImageUploadComponent = () => {
      setImgeComponent(true)
      setDisplayImgeComponent("none")
  }

  return (
    <div className='patient-profile-overview'>
        <div className='patient-avatar'>
          <h1>Profile Overview</h1>
          
          <div className="editbtnMenu">
            <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: "25px", cursor: "pointer"}} onClick={editFunction}/>  
          </div>

          <div className='avatar-box' style={{ display: `${DisplayImageComponent}` }}>
            <img src={
              location.state.gender == "Male" ? MaleAvatar: FemaleAvatar 
            } alt="Male Image Logo" width="150px" height="150px" style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "0% 10%" }}/>  
          </div>

          <div style={{ position: "absolute", right: "70px", top: "8em", display: `${DisplayImageComponent}` }}>
            <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: "25px", cursor: "pointer"}} onClick={callImageUploadComponent}/>  
          </div>

          {/* Experiments image upload */}
          {imageComponent ? <div className='fileUpload-menu' style={{ display: ""}}>
              <ImageUploadButton/>
            </div>:null  
          }
        </div>
        
        <div className='patient-info-overview'>
          <div className="left-patient-overview">
            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>First Name</div>
              <input type="text" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }} value={firstname} onChange={() => editFunction(event, "firstname")} disabled={inputBoxDisabled}/>
            </div>

            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Age</div>
              <input type="number" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }} value={age} onChange={() => editFunction(event, "age")} disabled={inputBoxDisabled}/>
            </div>

            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Phone</div>
              <input type="text" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }}  value={phone} onChange={() => editFunction(event, "phone")} disabled={inputBoxDisabled}/>
              
            </div>

            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Emergency Contact Name</div>
              <input type="text" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }} value={emContact} onChange={() => editFunction(event, "emContact")} disabled={inputBoxDisabled}/>
              
            </div>

            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Address</div>
              <input type="text" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }} value={address} onChange={() => editFunction(event, "address")} disabled={inputBoxDisabled}/>
              
            </div>
          </div>


          <div className="right-patient-overview">
            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Last Name</div>
              <input type="text" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }} value={lastname} onChange={() => editFunction(event, "lastname")} disabled={inputBoxDisabled}/>
              
            </div>

            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Gender</div>
              <div>
                <div>
                  <input type="radio" disabled={inputBoxDisabled} name="radiobtn" id="MaleRadio" checked={ gender == "Male" ? radioChecked: null} />
                  <label htmlFor="MaleRadio">Male</label> 
                </div>


                <div>
                  <input type="radio" disabled={inputBoxDisabled} name="radiobtn" id="FemaleRadio" checked={ gender == "Female" ? radioChecked: null}/> 
                  <label htmlFor="FemaleRadio">Female</label> 
                </div>
              </div>
            </div>
            
            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Gmail</div>
              <input type="text" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }} value={gmail} onChange={() => editFunction(event, "gmail")} disabled={inputBoxDisabled}/>
              
            </div>
            
            <div className='user-total-box'>
              <div className='input-title' style={{ color: `${inputBoxLabelColor}`}}>Emergency Contact Number</div>
              <input type="text" style={{ color: `${inputBoxTextColor}`, borderColor: `${inputBoxBorderColor}` }} value={emNumber} onChange={() => editFunction(event, "emNumber")} disabled={inputBoxDisabled}/>
              
            </div>
          </div>
        </div>

        <div className='patient-info-btn'>
            <button onClick={cancelChanges}>Cancel</button>
            <button>Save Changes</button>
        </div>

    </div>
  )
}

export default ProfileOverview