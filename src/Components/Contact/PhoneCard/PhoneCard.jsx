import React from 'react'
import './PhoneCard.css'
import phoneIcon from '../../../assets/ContactIcons/icons8-phone-30.png'

function PhoneCard() {
  return (
    <div id='phone-card-container' className='card'>
        <div id='phone-card-content' className='card-content'>
            <img src={phoneIcon} alt="" /><h4>+1 (647) 806-2942</h4>
        </div>
    </div>
  )
}

export default PhoneCard