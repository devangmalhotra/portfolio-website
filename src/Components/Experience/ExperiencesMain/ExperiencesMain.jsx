import React from 'react'
import './ExperiencesMain.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'

function ExperiencesMain() {
  return (
    <div id='experience-cards-container' className='page'>
        <ExperienceCard title='Yamaha Motor Canada' dateRange='Sept 2025 — Dec 2025' location='Toronto, ON'/>
        <ExperienceCard title='Yamaha Motor Canada' dateRange='Jan 2025 — Apr 2025' location='Toronto, ON'/>
        <ExperienceCard title='Nissan Motor Corporation' dateRange='May 2024 — Aug 2024' location='Mississauga, ON'/>
        <ExperienceCard title='Toronto Hydro' dateRange='May 2023 — Aug 2023' location='Toronto, ON'/>
    </div>
  )
}

export default ExperiencesMain