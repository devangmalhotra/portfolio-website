import React from 'react'
import './LinkedinCard.css'
import linkedinLogo from '../../assets/icons8-linkedin-50.png'

function LinkedinCard() {
  const handleClick = () => {
          const newWindow = window.open('https://www.linkedin.com/in/devangmalhotra/', '_blank', 'noopener,noreferrer');
          if (newWindow) newWindow.opener = null;
      };
  
    return (
      <div id='linkedin-card-container' className='external-link-card' onClick={handleClick}>
          <div id='linkedin-card-content' className='external-link-card-content'>
              <img src={linkedinLogo} alt="" />
          </div>
      </div>
    )
}

export default LinkedinCard