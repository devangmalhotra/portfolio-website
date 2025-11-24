import React from 'react'
import './DiscordCard.css'
import CopyClipboardBtn from '../../CopyClipboardBtn/CopyClipboardBtn'
import { motion } from 'motion/react'

function DiscordCard() {
  return (
    <motion.div id='discord-card-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}>
        <div id='discord-card-content' className='card-content'>
            <div className='icon contact-icon' id='discord-icon'></div><h4>@devangmalhotra</h4>
            <CopyClipboardBtn text='devangmalhotra'/>
        </div>
    </motion.div>
  )
}

export default DiscordCard