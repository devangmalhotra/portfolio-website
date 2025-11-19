import React from 'react'
import './ProjectCard.css'
import ticTacToeScreenshot from '../../../assets/ProjectScreenshots/tic-tac-toe-screenshot.png'
import ProjectStackLabel from '../ProjectStackLabel/ProjectStackLabel'

function ProjectCard(props) {
    const renderStackBadges = () => {
        return props.stack.map((item, index) => {
            return (<div key={index}>{item}</div>)
        })
    }

  return (
    <div className='project-card card'>
        <div className='card-content project-card-content'>
            <h2>{props.name}</h2>
            <div className='project-img-container'>
                <img src={ticTacToeScreenshot} alt="Tic-Tac-Toe Screenshot" />
            </div>
            <p>{props.description}</p>
            <div className='stack-badges'>
                {renderStackBadges()}
            </div>
            <div className='project-external-links-container'>
                <div className='project-external-link'>
                    <div className='project-external-link-github-icon icon'></div>
                    <h4>GitHub</h4>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectCard