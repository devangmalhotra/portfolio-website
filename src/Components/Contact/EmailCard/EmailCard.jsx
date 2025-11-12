import React from 'react'
import './EmailCard.css'
import emailIcon from '../../../assets/ContactIcons/icons8-email-48.png'

function EmailCard() {
  return (
    <div id='email-card-container'>
        <div id='email-card-content'>
            <img src={emailIcon} alt="" /><h4>malh2226@mylaurier.ca</h4>
        </div>
    </div>
  )
}

export default EmailCard