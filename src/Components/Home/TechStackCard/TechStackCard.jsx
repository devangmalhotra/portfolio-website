import React from 'react'
import './TechStackCard.css'
import TechStackLanguagesCarousel from '../TechStackLanguagesCarousel/TechStackLanguagesCarousel'
import TechStackLibCarousel from '../TechStackLibCarousel/TechStackLibCarousel'
import TechStackToolsCarousel from '../TechStackToolsCarousel/TechStackToolsCarousel'
import { motion } from 'motion/react'

function TechStackCard() {
  return (
    <motion.div id='tech-stack-card-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
        <div id='tech-stack-card-content' className='card-content'>
            <h2>What's My Tech Stack Looking Like?</h2>
            <div className='carousel'>
                <h4>Languages</h4>
                <TechStackLanguagesCarousel />
            </div>
            <div className='carousel'>
                <h4>Libraries and Frameworks</h4>
                <TechStackLibCarousel />
            </div>
            <div className='carousel'>
                <h4>Additional Tools and Technologies</h4>
                <TechStackToolsCarousel />
            </div>
            
        </div>
    </motion.div>
  )
}

export default TechStackCard