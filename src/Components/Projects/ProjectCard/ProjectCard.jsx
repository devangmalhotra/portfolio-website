import React from 'react'
import './ProjectCard.css'
import ticTacToeScreenshot from '../../../assets/ProjectScreenshots/tic-tac-toe-screenshot.png'

function ProjectCard(props) {
    const renderStackBadges = () => {
        return props.stack.map((item, index) => {
            return (<div className='stack-badge' key={index}><h5>{item}</h5></div>)
        })
    }

    const handleLinkClick = link => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

  return (
    <div className='project-card card'>
        <div className='card-content project-card-content'>
            <h2>{props.name}</h2>
            <div className='projects-img-info-container'>
                <div className='project-img-container'>
                    <img src={ticTacToeScreenshot} alt="Tic-Tac-Toe Screenshot" />
                </div>
                <div className='project-info-container'>
                    <p>{props.description}</p>
                    <div className='stack-badges'>
                        {renderStackBadges()}
                    </div>
                    <div className='project-external-links-container'>
                        <div className='project-external-link' onClick={handleLinkClick.bind(this, props.githubLink)}>
                            <div className='project-external-link-github-icon icon'></div>
                            <h4>GitHub</h4>
                        </div>
                        <div className='project-external-link' onClick={handleLinkClick.bind(this, props.demoLink)}>
                            <div className='project-external-link-demo-icon icon'></div>
                            <h4>Demo</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default ProjectCard