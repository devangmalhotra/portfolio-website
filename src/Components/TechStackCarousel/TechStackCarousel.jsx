import React from 'react'
import './TechStackCarousel.css'
import pythonLogo from '../../assets/TechStackIcons/icons8-python.svg'
import htmlLogo from '../../assets/TechStackIcons/icons8-html-5.svg'
import cssLogo from '../../assets/TechStackIcons/icons8-css3.svg'
import jsLogo from '../../assets/TechStackIcons/icons8-javascript.svg'
import javaLogo from '../../assets/TechStackIcons/icons8-java.svg'
import sqlLogo from '../../assets/TechStackIcons/icons8-sql-100.png'

function TechStackCarousel() {
  return (
    <div className='logos'>
        <div className='logos-slide'>
            <img src={pythonLogo} alt="Python" />
            <img src={htmlLogo} alt="HTML5" />
            <img src={cssLogo} alt="CSS3" />
            <img src={jsLogo} alt="JavaScript" />
            <img src={javaLogo} alt="Java" />
            <img src={sqlLogo} alt="SQL" />
        </div>
        <div className='logos-slide'>
            <img src={pythonLogo} alt="Python" />
            <img src={htmlLogo} alt="HTML5" />
            <img src={cssLogo} alt="CSS3" />
            <img src={jsLogo} alt="JavaScript" />
            <img src={javaLogo} alt="Java" />
            <img src={sqlLogo} alt="SQL" />
        </div>
    </div>
  )
}

export default TechStackCarousel