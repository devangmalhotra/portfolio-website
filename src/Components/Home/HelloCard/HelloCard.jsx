import React from 'react'
import './HelloCard.css'
import ContactBtn from '../ResumeBtn/ResumeBtn'

function HelloCard() {
  return (
    <div id='hello-card-container' className='card'>
      <div id='hello-card-content' className='card-content'>
        <h2>Hi There, I'm Devang Malhotra</h2>
        <h5>4th Year BBA and CS Student</h5>
        <ContactBtn />
      </div>
    </div>
  )
}

export default HelloCard