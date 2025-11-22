import React from 'react'
import './ExperiencesMain.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'

function ExperiencesMain() {
  return (
    <div id='experience-cards-container' className='page'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
    </div>
  )
}

export default ExperiencesMain