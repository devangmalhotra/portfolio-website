import React from 'react'
import './GithubCard.css'
import externalLinkIcon from '../../../assets/icons8-external-link-128.png'

function GithubCard() {
    const handleClick = () => {
        const newWindow = window.open('https://github.com/devangmalhotra', '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

  return (
    <div id='github-card-container' className='card external-link' onClick={handleClick}>
        <div id='github-card-content' className='card-content'>
            <div className='external-link-icon-container'>
                <img src={externalLinkIcon} alt="" />
            </div>
            <div className='icon contact-icon' id='github-icon'></div>
        </div>
    </div>
  )
}

export default GithubCard