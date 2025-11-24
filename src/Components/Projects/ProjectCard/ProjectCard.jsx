import React from 'react'
import './ProjectCard.css'
import { motion } from 'motion/react'

function ProjectCard(props) {
    const renderStackBadges = () => {
        return props.stack.map((item, index) => {
            return (<div className='stack-badge' key={index}><h4>{item}</h4></div>)
        })
    }

    const handleLinkClick = link => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

  return (
    <motion.div className='project-card card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }} key={props.index}>
        <div className='card-content project-card-content'>
            <h2>{props.name}</h2>
            <div className='projects-img-info-container'>
                <div className='project-img-container'>
                    <img src={props.image} alt="Screenshot" />
                </div>
                <div className='project-info-container'>
                    <p className='card-description-header'>Overview</p>
                    <p>{props.description}</p>
                    <p className='card-description-header'>Stack</p>
                    <div className='stack-badges'>
                        {renderStackBadges()}
                    </div>
                    <p className='card-description-header'>Actions</p>
                    <div className='project-external-links-container'>
                        <div className='project-external-link' onClick={handleLinkClick.bind(this, props.githubLink)}>
                            <div className='project-external-link-github-icon icon'></div>
                            <h4>GitHub</h4>
                        </div>
                        {props.demoLink ? (<div className='project-external-link' onClick={handleLinkClick.bind(this, props.demoLink)}>
                            <div className='project-external-link-demo-icon icon'></div>
                            <h4>Demo</h4>
                        </div>) : ''}
                    </div>
                </div>
                <div className='project-counter'>
                    <h5>{props.index + 1}</h5>
                </div>
            </div>
        </div>
        
    </motion.div>
  )
}

export default ProjectCard