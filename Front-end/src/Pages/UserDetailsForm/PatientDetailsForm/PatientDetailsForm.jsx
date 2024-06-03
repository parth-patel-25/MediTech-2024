import React from 'react'
import "./PatientDetailsForm.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import PatientDashbords from '../../Dashboards/PatientDashboards/PatientDashbords'

const PatientDetailsForm = () => {

    const [secondClass, SetSecondClass] = useState(null)
    const [thirdClass, SetThirdClass] = useState(null)

    const [slideBarColorOne, setSlideBarColorOne] = useState(null)
    const [slideBarColorTwo, setSlideBarColorTwo] = useState(null)
    
    const [firstCard, SetFirstCard] = useState('85px')
    const [secondCard, SetSecondCard] = useState('600px')
    const [thirdCard, SetThirdCard] = useState('600px')

    const [Gmail, SetGmail] = useState(null)
    const [Email, SetEmail] = useState(null)

    const [storeData, SetStoreData] = useState([])


    const AddSlideBar = () => {
        SetSecondClass('checkBoxed-two') 
        setSlideBarColorOne('checkSpan-one')
        SlideCard()
        if (secondClass != null) {
            SetThirdClass('checkBoxed-three')
            setSlideBarColorTwo('checkSpan-two')
        }
    }

    const RemoveSlideBar = () => {
        // RemovCard()
        PreviousSlideCard() 
        if (thirdClass) {
            SetThirdClass(null)
            setSlideBarColorTwo(null)
        }
        else {
            SetSecondClass(null)
            setSlideBarColorOne(null)
        }
    }

    const SlideCard = () => {
        SetFirstCard('-450px')
        SetSecondCard('85px')
        if(secondCard == '85px'){
            SetSecondCard('-450px')
            SetThirdCard('85px')
        }
    }
    
    const PreviousSlideCard = () => {
        SetFirstCard('85px')
        SetSecondCard('600px')
        if (thirdCard == '85px') {
            SetSecondCard('85px')
            SetFirstCard('-450px')
            SetThirdCard('600px')
        }
    }
    

    const [phoneErroMsg, SetPhoneErroMsg] = useState(null)

    const [erroMsg, SetErrorMsg] = useState(null)

    const [formData, setFormData] = useState({})

  

    const StoreData = (dataType, value) => {
        switch (dataType) {
            case "firstname" :
                SetStoreData([...storeData, value])
                setFormData({...formData, "firstname" : value})
                break
            case "lastname" :
                    SetStoreData([...storeData, value])
                    setFormData({...formData, "lastname" : value})
                    break
            case "phone":
                if (value.length == 10) {
                    SetStoreData([...storeData, value])                    
                    setFormData({...formData, "phone" : value})
                    SetPhoneErroMsg("")
                }
                else {
                    SetPhoneErroMsg("please enter 10 digits only...!")
                }
                break;
            case "gmail" :
                let email = value
                let Gmail = email.includes("@gmail.com")
                if (Gmail) {
                    SetGmail(Gmail)
                    setFormData({...formData, "gmail" : email})
                }
                else {
                    SetGmail("Enter a valid gmail address..!")
                }
                break
            case "address":
                SetStoreData([...storeData, value])
                setFormData({...formData, "address" : value})
                break;
            case "Em_contact_name":
                SetStoreData([...storeData, value])
                setFormData({...formData, "Em_contact_name" : value})
                break;
            case "Em_phone_number":
                if (value.length == 10) {
                    SetStoreData([...storeData, value])
                    setFormData({...formData, "Em_phone_number" : value})
                    SetPhoneErroMsg("")
                }
                else {
                    SetPhoneErroMsg("please enter 10 digits only...!")
                }
                break;
            case "gender":
                SetStoreData([...storeData, value])
                setFormData({...formData, "gender" : value})
                break;
            case "age":
                SetStoreData([...storeData, value])
                setFormData({...formData, "age" : value})
                break
            default:
                break;
        }
    }



    // consoling inputbox data
    // storeData.map((items) => {
    //     console.log('====================================');
    //     console.log(items);
    //     console.log('====================================');
    // })
    
    const navigate = useNavigate();

    const [tempData, SetTempData] = useState({
        "name" : "Parth"
    })

    const SubmitData = () => {
       console.log("Submiting data");
       console.log(formData)
       const formDataLength = Object.keys(formData).length;
       if(formDataLength == 9) {
           SetErrorMsg("Data is successfully submitted..!")

           // passing data to FecthAPI
        //    fetchAPI(formData)
            setTimeout(function() {
                navigate("/PatientDashboard", {state: {
                    "firstname" : formData['firstname'],
                    "lastname" : formData['lastname'], 
                    "age" : formData['age'], 
                    "gender" : formData['gender'], 
                    "phone" : formData['phone'], 
                    "gmail" : formData['gmail'],
                    "address" : formData['address'],
                    "Em_contact_name" : formData['Em_contact_name'],
                    "Em_phone_number" : formData['Em_phone_number']
                }})
            }, 1200)    
       } 
       else {
        SetErrorMsg("PLease enter every required fields..!")
       }
    }


    const fetchAPI = (formData) =>  {

        // posting submitted data to django backend
        console.log("I am Working FecthAPI");
        fetch('http://localhost:8000/PatientUserData/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that the data is JSON
            },
            body: JSON.stringify({ data: formData }), // Convert data to JSON string
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


  return (
    <div className='PatientDetailsForm'>
        <div className='center-content'>
            <div className='data-box'>
                <div className='patient-card-main-box'>
                    <div className='fillup-lines'>
                        <div className='box'>
                            <div className='inner-box checkBoxed'>
                                1
                            </div>
                            PERSONAL DETAILS
                        </div>
                        <span className={`span-1 ${slideBarColorOne}`}></span>
                        <div className='box'>
                            <div className={`inner-box ${secondClass}`}>
                                2
                            </div>
                            CONTACT DETAILS
                        </div>
                        <span className={`span-2 ${slideBarColorTwo}`}></span>
                        <div className='box'>
                            <div className={`inner-box ${thirdClass}`}>
                                3
                            </div>
                            EMERGENCY CONTACT
                        </div>
                    </div>

                    <div className='cards' style={{ transition: ".5s" }}>
                        <div className='outer-card-1' style={{ left: `${firstCard}`, transition: "all .5s" }}>
                            <div className='inner-card'>
                                <h3>PERSONAL DETAILS</h3>
                                <p>We will never sell it</p>
                                <div className='centerInput-boxes'>
                                    <div className='boxes'>
                                        <input type="text" placeholder='First Name' onChange={(e) => StoreData("firstname", e.target.value)}/>
                                        <input type="text" placeholder='Last Name' onChange={(e) => StoreData("lastname", e.target.value)}/>
                                        <input type="number" placeholder='Age' onChange={(e) => StoreData("age", e.target.value)}/>
                                        <select onChange={(e) => StoreData("gender", e.target.value)}>
                                            <option value="">Select Your Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='buttons'>
                                <button className='first-btn' onClick={AddSlideBar}>Next</button>
                            </div>
                        </div>

                        <div className='outer-card-2' style={{ left: `${secondCard}`, transition: "all .5s" }}>
                            <div className='inner-card'>
                                <h3>CONTACT DETAILS</h3>
                                <p>We will never sell it</p>
                                <div className='centerInput-boxes'>
                                    <div className='boxes'>
                                        <input type="number" placeholder='Phone' onChange={(e) => StoreData('phone', e.target.value)} />
                                        {phoneErroMsg}
                                        <input type="email" placeholder='Email Address' onChange={(e) => StoreData('gmail', e.target.value)}/>
                                        {Gmail}
                                        <input type="text" placeholder='Address'onChange={(e) => StoreData('address', e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='buttons'>
                                <button onClick={RemoveSlideBar}>Previous</button>
                                <button id='next-btn' onClick={AddSlideBar}>Next</button>
                            </div>
                        </div>

                        <div className='outer-card-3' style={{ left: `${thirdCard}`, transition: "all .5s" }}>
                            <div className='inner-card'>
                                <h3>EMERGENCY CONTACT</h3>
                                <p>We will never sell it</p>
                                <div className='centerInput-boxes'>
                                    <div className='boxes'>
                                        <input type="text" placeholder='Emergency Contact Name' onChange={(e) => StoreData('Em_contact_name', e.target.value)}/>
                                        <input type="number" placeholder='Emergency Contact Phone Number'onChange={(e) => StoreData('Em_phone_number', e.target.value)} maxLength={10}/>
                                        {phoneErroMsg}
                                    </div>
                                </div>
                            </div>
                            
                            <div className='buttons'>
                                <button onClick={RemoveSlideBar}>Previous</button>
                                <button onClick={SubmitData}>Submit</button>
                            </div>
                            <div style={{ textAlign: "center", marginTop: "20px" }}>
                                {erroMsg}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientDetailsForm