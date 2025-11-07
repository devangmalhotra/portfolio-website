import React from 'react'
import './TechStackToolsCarousel.css' 
import gitLogo from '../../assets/TechStackIcons/icons8-git-250.png'
import dockerLogo from '../../assets/TechStackIcons/icons8-docker.svg'
import mysqlLogo from '../../assets/TechStackIcons/icons8-sql-100.png'
import officeLogo from '../../assets/TechStackIcons/icons8-microsoft-office.svg'

function TechStackToolsCarousel() {
    const logos = [{ src: gitLogo, name:'Git' }, { src: dockerLogo, name:'Docker' }, { src: mysqlLogo, name:'MySQL' }, { src: officeLogo, name:'MS Office' }];

    const renderLogos = () => {
        return (logos.map((item, index) => {
            return (
            <div className='logo-caption-container' key={index}>
                <img key={index} src={item.src} alt={item.name} />
                <h5>{item.name}</h5>
            </div>
            )
        }))
    }

  return (
    <div className='logos'>
        <div className='logos-slide'>
            {renderLogos()}
        </div>
        <div className='logos-slide'>
            {renderLogos()}
        </div>
        <div className='logos-slide'>
            {renderLogos()}
        </div>
    </div>
  )
}

export default TechStackToolsCarousel