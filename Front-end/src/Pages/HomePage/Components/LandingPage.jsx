import React from 'react'
import './LandingPage.css'
import { useAuth0 } from "@auth0/auth0-react";
import LandingImage from '../../../assets/landing_image.jpg'

const LandingPage = () => {

    const { loginWithRedirect } = useAuth0();
    

      

  return (
    <div className='landing-page'>
        <div className='nav-bar'>
            <div className='logo'>Logo</div>
            <div className='contents'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className='authentication'>
                <div>
                    <a href="" onClick={() => loginWithRedirect({
                        authorizationParams: {
                            redirect_uri: "http://localhost:5173/UserRole"
                        }
                    })}>Sign In</a>
                </div>
                <div>
                    <a href="" onClick={() => loginWithRedirect({
                        authorizationParams: {
                            screen_hint: "signup",
                            redirect_uri: "http://localhost:5173/UserRole"
                        }
                    })}>Sign Up</a>
                </div>
            </div>
        </div>
        <div className='center-section'>
            <div className='left-section'>
                <h1>Welcome To Health <br /> Intelligence Hub</h1>
                <div className='inner-content'>
                    <p className='para'>Your healthcare companion </p> <p className='para-two'>empowring patients, enlightening doctors.</p>
                </div>
                <div className='last-para'>
                    <p>Transforming healthcare: empowring patients and <br /> doctors thorugh secure health data managment and advanced analysis. <br /> your trusted partner in a new era of well - being </p>
                </div>
                <div className='buttons'>
                    <div className='btn-1 same-btn'>schedule a demo</div>
                    <div className='btn-2 same-btn'>Learn More</div>
                </div>
            </div>
            <div className='right-section'>
                <img src={LandingImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LandingPage