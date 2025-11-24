import React from 'react'
import './EmailCard.css'
import emailIcon from '../../../assets/ContactIcons/icons8-email-48.png'
import CopyClipboardBtn from '../../CopyClipboardBtn/CopyClipboardBtn'
import { motion } from 'motion/react'

function EmailCard() {
  return (
    <motion.div id='email-card-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
        <div id='email-card-content' className='card-content'>
            <div className='icon contact-icon' id='email-icon'></div><h4>malh2226@mylaurier.ca</h4>
            <CopyClipboardBtn text='malh2226@mylaurier.ca' />
        </div>
    </motion.div>
  )
}

export default EmailCard