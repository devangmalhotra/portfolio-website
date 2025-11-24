import React from 'react'
import './PhoneCard.css'
import phoneIcon from '../../../assets/ContactIcons/icons8-phone-30.png'
import CopyClipboardBtn from '../../CopyClipboardBtn/CopyClipboardBtn'
import { motion } from 'motion/react'

function PhoneCard() {
  return (
    <motion.div id='phone-card-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}>
        <div id='phone-card-content' className='card-content'>
            <div className='icon contact-icon' id='phone-icon'></div><h4>+1 (647) 806-2942</h4>
            <CopyClipboardBtn text='6478062942'/>
        </div>
    </motion.div>
  )
}

export default PhoneCard