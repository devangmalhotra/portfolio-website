import React from 'react'
import './TechStackLibCarousel.css'
import reactLogo from '../../assets/TechStackIcons/icons8-react.svg'
import pandasLogo from '../../assets/TechStackIcons/favicon_white.ico'
import nodeLogo from '../../assets/TechStackIcons/icons8-nodejs-96.png'
import tailwindLogo from '../../assets/TechStackIcons/icons8-tailwind-css-96.png'
import flaskLogo from '../../assets/TechStackIcons/icons8-flask-100.png'
import seleniumLogo from '../../assets/TechStackIcons/icons8-selenium.svg'
import expressLogo from '../../assets/TechStackIcons/icons8-express-js-100.png'
import puppeteerLogo from '../../assets/TechStackIcons/output-onlinepngtools.png'

function TechStackLibCarousel() {
  return (
    <div className='logos'>
        <div className='logos-slide'>
            <div className='logo-caption-container'>
                <img src={reactLogo} alt="React" />
                <h5>React</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={pandasLogo} alt="Pandas" />
                <h5>Pandas</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={nodeLogo} alt="Node.js" />
                <h5>Node.js</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={tailwindLogo} alt="Tailwind" />
                <h5>Tailwind</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={flaskLogo} alt="Flask" />
                <h5>Flask</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={seleniumLogo} alt="Selenium" />
                <h5>Selenium</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={expressLogo} alt="Express" />
                <h5>Express</h5>
            </div>
            <div className='logo-caption-container'>
                <img src={puppeteerLogo} alt="Puppeteer" />
                <h5>Puppeteer</h5>
            </div>
        </div>
    </div>
  )
}

export default TechStackLibCarousel