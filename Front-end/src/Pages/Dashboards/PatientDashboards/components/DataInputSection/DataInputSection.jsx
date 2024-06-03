import React from 'react'
import "./DataInputSection.css"

const DataInputSection = () => {
  return (
    <div className='DataInputSection'>
        <div className='datainput-title-contatiner'>
            <h1 className='datainput-title'>Self Diagnose Here</h1>
            <span className='datainput-title-underline'></span>
        </div>
        <div className='datainput-section-data'>
            <div className='current-symptoms'>
                <h3>Current Symptoms: </h3>
                <textarea></textarea>
            </div>
            <div className='current-symptoms'>
                <h3>Medications: </h3>
                <textarea></textarea>
            </div>
            <div className='current-symptoms'>
                <h3>Allergies: </h3>
                <textarea></textarea>
            </div>
            <div className='current-symptoms'>
                <h3>Vital Signs: </h3>
                <textarea></textarea>
            </div>
            <div className='current-symptoms'>
                <h3>Laboratory Test Results: </h3>
                <textarea></textarea>
            </div>
        </div>
        <div className='datainput-btn'>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default DataInputSection