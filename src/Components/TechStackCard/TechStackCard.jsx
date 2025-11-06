import React from 'react'
import './TechStackCard.css'
import TechStackCarousel from '../TechStackCarousel/TechStackCarousel'

function TechStackCard() {
  return (
    <div id='tech-stack-card-container'>
        <div id='tech-stack-card-content'>
            <TechStackCarousel />
        </div>
    </div>
  )
}

export default TechStackCard