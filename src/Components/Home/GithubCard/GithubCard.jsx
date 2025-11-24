import React from 'react'
import './GithubCard.css'
import externalLinkIcon from '../../../assets/icons8-external-link-128.png'
import { motion } from 'motion/react'

function GithubCard() {
    const handleClick = () => {
        const newWindow = window.open('https://github.com/devangmalhotra', '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

  return (
    <motion.div id='github-card-container' className='card external-link' onClick={handleClick} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }} whileHover={{ backgroundColor: "var(--accent)", transition: { duration: 0.3 } }}>
        <div id='github-card-content' className='card-content'>
            <div className='external-link-icon-container'>
                <img src={externalLinkIcon} alt="" />
            </div>
            <div className='icon' id='github-icon'></div>
        </div>
    </motion.div>
  )
}

export default GithubCard