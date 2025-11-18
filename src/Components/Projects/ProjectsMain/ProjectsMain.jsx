import React from 'react'
import './ProjectsMain.css'
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectsMain() {
  return (
    <div className='page'>
        <ProjectCard name='A.I. Tic-Tac-Toe' description='Exploring the minimax, alpha-beta-pruning, and expectiminimax algorithms with a 3x3 board.' stack={["React", "Express", "PostgreSQL"]} />
    </div>
  )
}

export default ProjectsMain