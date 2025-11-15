import React from 'react'
import './PhoneCard.css'
import phoneIcon from '../../../assets/ContactIcons/icons8-phone-30.png'
import CopyClipboardBtn from '../../CopyClipboardBtn/CopyClipboardBtn'

function PhoneCard() {
  return (
    <div id='phone-card-container' className='card'>
        <div id='phone-card-content' className='card-content'>
            <div className='icon contact-icon' id='phone-icon'></div><h4>+1 (647) 806-2942</h4>
            <CopyClipboardBtn text='6478062942'/>
        </div>
    </div>
  )
}

export default PhoneCard