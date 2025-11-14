import React from 'react'
import './LinkedinCard.css'
import externalLinkIcon from '../../../assets/icons8-external-link-128.png'

function LinkedinCard() {
  const handleClick = () => {
          const newWindow = window.open('https://www.linkedin.com/in/devangmalhotra/', '_blank', 'noopener,noreferrer');
          if (newWindow) newWindow.opener = null;
      };
  
    return (
      <div id='linkedin-card-container' className='card external-link' onClick={handleClick}>
          <div id='linkedin-card-content' className='card-content'>
            <div className='external-link-icon-container'>
                <img src={externalLinkIcon} alt="" />
            </div>
            <div className='icon' id='linkedin-icon'></div>
          </div>
      </div>
    )
}

export default LinkedinCard