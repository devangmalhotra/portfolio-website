import React from 'react'
import './LocationCard.css'
import locationPinIcon from '../../../assets/icons8-location-pin-50.png'

function LocationCard() {
  return (
    <div id='location-card-container' className='card'>
        <div id='location-card-content' className='card-content'>
            <div className='icon' id='location-icon'></div><h4>Brampton, ON</h4>
        </div>
    </div>
  )
}

export default LocationCard