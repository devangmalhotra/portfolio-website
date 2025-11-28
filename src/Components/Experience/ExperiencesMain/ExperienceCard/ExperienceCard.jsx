import React from 'react'
import './ExperienceCard.css'
import { motion } from 'motion/react'

function ExperienceCard(props) {
  return (
    <motion.div className='experience-card card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
        <div className='experience-card-content'>
            <div className='experience-card-content-header'>
                <h2>{props.title}</h2>
                <div className='experience-current-badge'>
                    {props.current && (<h4>Current</h4>)}
                </div>
            </div>
            <h4 className='experience-position-text'>{props.position}</h4>
            <div className='experience-description-container'>
                <div className='experience-description-date-location'>
                    <h4>{props.dateRange}</h4>
                    <h4>{props.location}</h4>
                </div>
                <div className='experience-description-role-notes'>
                    <ul>
                        {props.notes.map((item, index) => {
                            return(<li key={index}><p>{item}</p></li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default ExperienceCard