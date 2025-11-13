import React from 'react'
import './TechStackCard.css'
import TechStackLanguagesCarousel from '../TechStackLanguagesCarousel/TechStackLanguagesCarousel'
import TechStackLibCarousel from '../TechStackLibCarousel/TechStackLibCarousel'
import TechStackToolsCarousel from '../TechStackToolsCarousel/TechStackToolsCarousel'

function TechStackCard() {
  return (
    <div id='tech-stack-card-container' className='card'>
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
    </div>
  )
}

export default TechStackCard