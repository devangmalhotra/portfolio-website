import React from 'react'
import './GithubCard.css'
import githubLogo from '../../assets/icons8-github-64.png'
import externalLinkIcon from '../../assets/icons8-external-link-128.png'

function GithubCard() {
    const handleClick = () => {
        const newWindow = window.open('https://github.com/devangmalhotra', '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

  return (
    <div id='github-card-container' className='external-link-card' onClick={handleClick}>
        <div id='github-card-content' className='external-link-card-content'>
            <div className='external-link-icon-container'>
                <img src={externalLinkIcon} alt="" />
            </div>
            <img src={githubLogo} alt="" />
        </div>
    </div>
  )
}

export default GithubCard