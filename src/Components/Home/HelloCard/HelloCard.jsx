import React from 'react'
import './HelloCard.css'
import ContactBtn from '../ResumeBtn/ResumeBtn'
import { motion } from 'motion/react'

function HelloCard() {
  return (
    <motion.div id='hello-card-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
      <div id='hello-card-content' className='card-content'>
        <h2>Hi There, I'm Devang Malhotra! 👋</h2>
        <h5>4th Year BBA and CS Student @ Wilfrid Laurier University</h5>
        <ContactBtn />
      </div>
    </motion.div>
  )
}

export default HelloCard