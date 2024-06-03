import React from 'react'
import "./FeedBackSurveys.css"
import angryFace from "../../../../../assets/angry.png"
import sadFace from "../../../../../assets/sad-face.png"
import avoidOkayFace from "../../../../../assets/surprised.png"
import smilingFace from "../../../../../assets/smiling-face.png"
import happyFace from "../../../../../assets/happy-face.png"


const FeedBackSurveys = () => {
  return (
    <div className='FeedBackSurveys'>
        <div className='feedback-outerclss'>
            <div className='feedback-innerclss'>
                <div className='feedback-inner-info'>
                    <h1>Rate us!</h1>
                    <p className='feedback-para'>Your input is super important in helping us understand your needs better, <br /> so we can customize our services to suit you perfectly.</p>
                    <h3>How would you rate our app?</h3>
                    <div className='emoji-section'>
                    {/* <img src={happyFace} width="50" alt="" />  */}
                        <div className='emoji-1'><img src={angryFace} width="50" alt="" /></div>
                        <div className='emoji-2'><img src={sadFace} width="50" alt="" /></div>
                        <div className='emoji-3'><img src={avoidOkayFace} width="50" alt="" /></div>
                        <div className='emoji-4'><img src={smilingFace} width="50" alt="" /></div>
                        <div className='emoji-5'><img src={happyFace} width="50" alt="" /></div>
                    </div>
                    <textarea className='feedbacksurvey-textarea' placeholder='Add a comment...'></textarea>
                    <div className='feedbacksurvey-btn'>
                        <button>Send now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedBackSurveys