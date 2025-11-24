import React from 'react'
import './LocationCard.css'
import locationPinIcon from '../../../assets/icons8-location-pin-50.png'
import { motion } from 'motion/react'

function LocationCard() {
  return (
    <motion.div id='location-card-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
        <div id='location-card-content' className='card-content'>
            <div className='icon' id='location-icon'></div><h4>Brampton, ON</h4>
        </div>
    </motion.div>
  )
}

export default LocationCard