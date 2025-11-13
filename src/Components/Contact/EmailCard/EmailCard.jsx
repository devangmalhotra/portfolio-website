import React from 'react'
import './EmailCard.css'
import emailIcon from '../../../assets/ContactIcons/icons8-email-48.png'
import externalLinkIcon from '../../../assets/icons8-external-link-128.png'

function EmailCard() {
  const handleClick = () => {
        const newWindow = window.open('mailto:malh2226@mylaurier.ca', '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

  return (
    <div id='email-card-container' className='card external-link' onClick={handleClick}>
        <div className='external-link-icon-container'>
            <img src={externalLinkIcon} alt="" />
        </div>
        <div id='email-card-content' className='card-content'>
            <img src={emailIcon} alt="" /><h4>malh2226@mylaurier.ca</h4>
        </div>
    </div>
  )
}

export default EmailCard