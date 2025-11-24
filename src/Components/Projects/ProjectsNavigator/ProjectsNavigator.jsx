import React from 'react'
import './ProjectsNavigator.css'
import { motion } from 'motion/react'

function ProjectsNavigator(props) {
  return (
    <motion.div id='project-navigator-container' className='' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}>
        <div id='project-navigator-back' className='card' onClick={props.moveBackward}>
            <div id='project-navigator-backward-pic' className='icon'></div>
        </div>
        <div id='project-navigator-forward' className='card' onClick={props.moveForward}>
            <div id='project-navigator-forward-pic' className='icon'></div>
        </div>
    </motion.div>
  )
}

export default ProjectsNavigator