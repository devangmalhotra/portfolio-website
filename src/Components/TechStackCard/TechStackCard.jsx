import React from 'react'
import './TechStackCard.css'
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel'

function TechStackCard() {
  return (
    <div id='tech-stack-card-container'>
        <div id='tech-stack-card-content'>
            <h2>What's My Tech Stack Looking Like?</h2>
            <TechStackCarousel />
        </div>
    </div>
  )
}

export default TechStackCard