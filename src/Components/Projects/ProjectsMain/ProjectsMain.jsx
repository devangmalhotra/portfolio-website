import React from 'react'
import './ProjectsMain.css'
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectsMain() {
  return (
    <div className='page'>
        <ProjectCard name='A.I. Tic-Tac-Toe' description='Exploring the minimax, alpha-beta-pruning, and expectiminimax algorithms with a 3x3 board.' stack={["React", "Express", "PostgreSQL"]} github-link='https://github.com/devangmalhotra/ai-tic-tac-toe' demo-link='https://devangmalhotra-tic-tac-toe.netlify.app/'/>
    </div>
  )
}

export default ProjectsMain