import React from 'react'
import './ExperienceCard.css'

function ExperienceCard(props) {
  return (
    <div className='experience-card card'>
        <div className='experience-card-content'>
            <h2>{props.title}</h2>
            <div className='experience-description-container'>
                <div className='experience-description-date-location'>
                    <h4>{props.dateRange}</h4>
                    <h4>{props.location}</h4>
                </div>
                <div className='experience-description-role-notes'>
                    <ul>
                        <li><p>• Test</p></li>
                        <li><p>• Test</p></li>
                        <li><p>• Test</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard