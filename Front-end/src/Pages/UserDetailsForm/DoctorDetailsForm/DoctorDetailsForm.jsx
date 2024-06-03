import React from 'react'
import "./DoctorDetailsForm.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorDetailsForm = () => {

    const navigate = useNavigate()


    const [secondClass, SetSecondClass] = useState(null)
    const [thirdClass, SetThirdClass] = useState(null)
    const [fourthClass, SetFourthClass] = useState(null)

    const [slideBarColorOne, setSlideBarColorOne] = useState(null)
    const [slideBarColorTwo, setSlideBarColorTwo] = useState(null)
    const [slideBarColorThree, setSlideBarColorThree] = useState(null)
    
    const [firstCard, SetFirstCard] = useState('200px')
    const [secondCard, SetSecondCard] = useState('1000px')
    const [thirdCard, SetThirdCard] = useState('1000px')
    const [fourthCard, SetFourthCard] = useState('1000px')

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
        if (thirdClass != null) {
            SetFourthClass('checkBoxed-fourth')
            setSlideBarColorThree('checkSpan-three')
        }
    }

    const RemoveSlideBar = () => {
        // RemovCard()
        PreviousSlideCard() 
        if (fourthClass) {
            SetFourthClass(null)
            setSlideBarColorThree(null)
        }
        else if (thirdClass) {
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
        SetSecondCard('200px')
        if(secondCard == '200px'){
            SetSecondCard('-450px')
            SetThirdCard('200px')
        }
        else if (thirdCard == '200px') {
            SetThirdCard('-450px')
            SetFourthCard('200px')
            SetSecondCard('-450px')
        }
    }
    
    const PreviousSlideCard = () => {
        SetFirstCard('200px')
        SetSecondCard('1000px')
        if (thirdCard == '200px') {
            SetSecondCard('200px')
            SetFirstCard('-450px')
            SetThirdCard('1000px')
        }
        else if (fourthCard == '200px') {
            SetFirstCard('-450px')
            SetSecondCard('-450px')
            SetThirdCard('200px')
            SetFourthCard('1000px')
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
            case "Specialization":
                SetStoreData([...storeData, value])
                setFormData({...formData, "Specialization" : value})
                break;
            case "license":
                SetStoreData([...storeData, value])
                setFormData({...formData, "license" : value})
                break;
            case "education":
                SetStoreData([...storeData, value])
                setFormData({...formData, "education" : value})
                break;
            case "gender":
                SetStoreData([...storeData, value])
                setFormData({...formData, "gender" : value})
                break;
            case "age":
                SetStoreData([...storeData, value])
                setFormData({...formData, "age" : value})
                break
            case "startDate":
                SetStoreData([...storeData, value])
                setFormData({...formData, "startDate" : value})
                break
            case "endDate":
                SetStoreData([...storeData, value])
                setFormData({...formData, "endDate" : value})
                break
            case "textarea":
                SetStoreData([...storeData, value])
                setFormData({...formData, "textarea" : value})
                break
            case "jobTitle":
                SetStoreData([...storeData, value])
                setFormData({...formData, "jobTitle" : value})
                break
            case "hospital":
                SetStoreData([...storeData, value])
                setFormData({...formData, "hospital" : value})
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
    
    const SubmitData = () => {
       console.log("Submiting data");
       console.log(formData)
       const formDataLength = Object.keys(formData).length;
       if(formDataLength == 15) {
           SetErrorMsg("Data is successfully submitted..!")
           fetchAPI(formData)

        // sending data to next component (to DoctorDashboards)
        setTimeout(function() {
            navigate("/DoctorDashboard", {state: {
                "firstname" :   formData['firstname'],    
                "lastname" :   formData['lastname'],
                "phone":   formData['phone'],
                "gmail" :   formData['gmail'],
                "address":   formData['address'],
                "Specialization":   formData['Specialization'],
                "license":   formData['license'],
                "education":   formData['education'],
                "gender":   formData['gender'],
                "age":   formData['age'],
                "startDate":   formData['startDate'],
                "endDate":   formData['endDate'],
                "textarea":   formData['textarea'],
                "jobTitle":   formData['jobTitle'],
                "hospital":   formData['hospital'],
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
        fetch('http://localhost:8000/DoctorUserData/', {
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
    <div className='DoctorDetailsForm'>
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
                            MEDICAL INFORMATION
                        </div>
                        <span className={`span-3 ${slideBarColorThree}`}></span>
                        <div className='box'>
                            <div className={`inner-box ${fourthClass}`}>
                                4
                            </div>
                            PROFESSIONAL EXPERIENCE
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
                                <h3>MEDICAL INFORMATION</h3>
                                <p>We will never sell it</p>
                                <div className='centerInput-boxes'>
                                    <div className='boxes'>
                                        <input type="text" placeholder='Specialization' onChange={(e) => StoreData('Specialization', e.target.value)}/>
                                        <input type="text" placeholder='Medical License Information'onChange={(e) => StoreData('license', e.target.value)} />
                                        <select name="educationQualifications" onChange={(e) => StoreData('education', e.target.value)}>
                                            <option value="">Select Education/Qualification</option>
                                            <optgroup label="Medical Degrees">
                                                <option value="MD">Doctor of Medicine (MD)</option>
                                                <option value="DO">Doctor of Osteopathic Medicine (DO)</option>
                                                <option value="MBBS">Bachelor of Medicine, Bachelor of Surgery (MBBS)</option>
                                                <option value="MBChB">Bachelor of Medicine, Bachelor of Surgery (MBChB)</option>
                                                <option value="BMBS">Bachelor of Medicine, Bachelor of Surgery (BMBS)</option>
                                                <option value="MBChB">Bachelor of Medicine and Surgery (MBChB)</option>
                                                <option value="MBChB">Bachelor of Surgery, Bachelor of Medicine (MBChB)</option>
                                                <option value="MD-PhD">Doctor of Medicine and Doctor of Philosophy (MD-PhD)</option>
                                                <option value="DSc">Doctor of Science (DSc)</option>
                                                <option value="DM">Doctor of Medicine (DM)</option>
                                                <option value="DPhil">Doctor of Philosophy (DPhil)</option>
                                                <option value="MS">Master of Science (MS)</option>
                                            </optgroup>
                                            <optgroup label="Dental Degrees">
                                                <option value="DDS">Doctor of Dental Surgery (DDS)</option>
                                                <option value="DMD">Doctor of Dental Medicine (DMD)</option>
                                                <option value="BDS">Bachelor of Dental Surgery (BDS)</option>
                                                <option value="BDSc">Bachelor of Dental Science (BDSc)</option>
                                                <option value="DPT">Doctor of Physical Therapy (DPT)</option>
                                                <option value="PhD">Doctor of Philosophy (PhD)</option>
                                            </optgroup>
                                            <optgroup label="Nursing Degrees">
                                                <option value="RN">Registered Nurse (RN)</option>
                                                <option value="BSN">Bachelor of Science in Nursing (BSN)</option>
                                                <option value="MSN">Master of Science in Nursing (MSN)</option>
                                                <option value="NP">Nurse Practitioner (NP)</option>
                                                <option value="CNM">Certified Nurse Midwife (CNM)</option>
                                                <option value="CRNA">Certified Registered Nurse Anesthetist (CRNA)</option>
                                                <option value="LPN">Licensed Practical Nurse (LPN)</option>
                                            </optgroup>
                                            <optgroup label="Allied Health Degrees">
                                                <option value="PA">Physician Assistant (PA)</option>
                                                <option value="PT">Physical Therapist (PT)</option>
                                                <option value="OT">Occupational Therapist (OT)</option>
                                                <option value="SLP">Speech-Language Pathologist (SLP)</option>
                                                <option value="DC">Doctor of Chiropractic (DC)</option>
                                                <option value="PharmD">Doctor of Pharmacy (PharmD)</option>
                                                <option value="MSW">Master of Social Work (MSW)</option>
                                                <option value="MHA">Master of Health Administration (MHA)</option>
                                            </optgroup>
                                            <optgroup label="Other">
                                                <option value="Other">Other</option>
                                            </optgroup>
                                        </select>

                                    </div>
                                </div>
                            </div>

                            <div className='buttons'>
                                <button onClick={RemoveSlideBar}>Previous</button>
                                <button id='next-btn' onClick={AddSlideBar}>Next</button>
                            </div>
                        </div>

                        <div className='outer-card-4' style={{ left: `${fourthCard}`, transition: "all .5s" }}>
                            <div className='inner-card'>
                                <h3>PROFESSIONAL EXPERIENCE</h3>
                                <p>We will never sell it</p>
                                <div className='centerInput-boxes'>
                                    <div className='boxes'>
                                        <input type="text" placeholder='Job Title' onChange={(e) => StoreData('jobTitle', e.target.value)} />
                                        <input type="text" placeholder='Institution/Hospital Name' onChange={(e) => StoreData('hospital', e.target.value)} />
                                        
                                        <div className='dates'>
                                            <div className='start-date'>
                                                <span>Start Date</span>
                                                <input type="date" onChange={(e) => StoreData('startDate', e.target.value)}/>
                                            </div>
                                            <div className='end-date'>
                                                <span>End Date</span>
                                                <input type="date" onChange={(e) => StoreData('endDate', e.target.value)}/>
                                            </div>
                                        </div>
                                        
                                        {/* <input type="te" placeholder='Address'onChange={(e) => StoreData('address', e.target.value)}/> */}
                                        <textarea name="" id="" cols="41" rows="5" placeholder='Responsibilities/Key Achievements' onChange={(e) => StoreData('textarea', e.target.value)}></textarea>
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

export default DoctorDetailsForm