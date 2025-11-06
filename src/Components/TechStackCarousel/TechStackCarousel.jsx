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
            <div className='logo-caption-container'>
                <img src={pythonLogo} alt="Python" />
                <h5>Python</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={htmlLogo} alt="HTML5" />
                <h5>HTML5</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={cssLogo} alt="CSS3" />
                <h5>CSS3</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={jsLogo} alt="JavaScript" />
                <h5>JavaScript</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={javaLogo} alt="Java" />
                <h5>Java</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={sqlLogo} alt="SQL" />
                <h5>SQL</h5>
            </div>
        </div>
        <div className='logos-slide'>
            <div className='logo-caption-container'>
                <img src={pythonLogo} alt="Python" />
                <h5>Python</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={htmlLogo} alt="HTML5" />
                <h5>HTML5</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={cssLogo} alt="CSS3" />
                <h5>CSS3</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={jsLogo} alt="JavaScript" />
                <h5>JavaScript</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={javaLogo} alt="Java" />
                <h5>Java</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={sqlLogo} alt="SQL" />
                <h5>SQL</h5>
            </div>
        </div>
    </div>
  )
}

export default TechStackCarousel