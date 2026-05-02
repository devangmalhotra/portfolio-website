import React from 'react'
import './ResumeBtn.css'
import resume from '../../../assets/Devang Malhotra - Resume.pdf'

function ResumeBtn() {
  const handleClick = () => {
          const newWindow = window.open(resume, '_blank', 'noopener,noreferrer');
          if (newWindow) newWindow.opener = null;
      };

  return (
    <div>
        <button id='contact-me-btn' onClick={handleClick}>View Resume &#8594;</button>
    </div>
  )
}

export default ResumeBtn