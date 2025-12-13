import React from 'react'
import './LinkedinCard.css'
import { motion } from 'motion/react';

function LinkedinCard() {
  const handleClick = () => {
          const newWindow = window.open('https://www.linkedin.com/in/devangmalhotra/', '_blank', 'noopener,noreferrer');
          if (newWindow) newWindow.opener = null;
      };
  
    return (
      <motion.div id='linkedin-card-container' className='card external-link' onClick={handleClick} initial={{ scale: 0, backgroundColor: "var(--card-background)" }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }} whileHover={{ backgroundColor: "var(--accent)", transition: { duration: 0.3 } }} whileTap={{ backgroundColor: "var(--accent)", transition: { duration: 0.3 } }}>
          <div id='linkedin-card-content' className='card-content'>
            <div className='external-link-icon-container icon'></div>
            <div className='icon' id='linkedin-icon'></div>
          </div>
      </motion.div>
    )
}

export default LinkedinCard