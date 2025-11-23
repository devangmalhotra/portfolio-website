import React from 'react'
import './TechStackLanguagesCarousel.css'
import pythonLogo from '../../../assets/TechStackIcons/icons8-python.svg'
import htmlLogo from '../../../assets/TechStackIcons/icons8-html-5.svg'
import cssLogo from '../../../assets/TechStackIcons/icons8-css3.svg'
import jsLogo from '../../../assets/TechStackIcons/icons8-javascript.svg'
import javaLogo from '../../../assets/TechStackIcons/icons8-java.svg'
import sqlLogo from '../../../assets/TechStackIcons/icons8-sql-100.png'

function TechStackCarousel() {
    const logos = [{ src: pythonLogo, name: 'Python' }, { src: htmlLogo, name: 'HTML5' }, { src: cssLogo, name: 'CSS3' }, { src: jsLogo, name: 'JavaScript' }, { src: javaLogo, name: 'Java' }, { src: sqlLogo, name: 'SQL' }];

    const renderLogos = () => {
        return logos.map((item, index) => {
            return (
            <div key={index}className='logo-caption-container'>
                <div className='icon carousel-icon' id={item.name.toLowerCase() + "-icon"}></div>
                <h5>{item.name}</h5>
            </div>
        )
        })
    }

  return (
    <div className='logos'>
        <div className='logos-slide languages-slide'>
            {renderLogos()}
            {renderLogos()}
        </div>
        <div className='logos-slide languages-slide'>
            {renderLogos()}
            {renderLogos()}
        </div>
        
    </div>
  )
}

export default TechStackCarousel