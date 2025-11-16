import React from 'react'
import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
    </div>
  )
}

export default ProjectCard