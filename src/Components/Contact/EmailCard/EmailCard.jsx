import React from 'react'
import './EmailCard.css'
import emailIcon from '../../../assets/ContactIcons/icons8-email-48.png'
import CopyClipboardBtn from '../../CopyClipboardBtn/CopyClipboardBtn'

function EmailCard() {
  return (
    <div id='email-card-container' className='card'>
        <div id='email-card-content' className='card-content'>
            <img src={emailIcon} alt="" /><h4>malh2226@mylaurier.ca</h4>
            <CopyClipboardBtn text='malh2226@mylaurier.ca' />
        </div>
    </div>
  )
}

export default EmailCard