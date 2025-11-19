import React from 'react'
import './ProjectsNavigator.css'

function ProjectsNavigator(props) {
  return (
    <div id='project-navigator-container' className=''>
        <div id='project-navigator-back' className='card' onClick={props.moveBackward}>
            <div id='project-navigator-backward-pic' className='icon'></div>
        </div>
        <div id='project-navigator-forward' className='card' onClick={props.moveForward}>
            <div id='project-navigator-forward-pic' className='icon'></div>
        </div>
    </div>
  )
}

export default ProjectsNavigator