import React from 'react'
import './LocationCard.css'
import locationPinIcon from '../../../assets/icons8-location-pin-50.png'

function LocationCard() {
  return (
    <div id='location-card-container'>
        <div id='location-card-content'>
            <img src={locationPinIcon} alt="Location Icon" /><h4>Brampton, ON</h4>
        </div>
    </div>
  )
}

export default LocationCard