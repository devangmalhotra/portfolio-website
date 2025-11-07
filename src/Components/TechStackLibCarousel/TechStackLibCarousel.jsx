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
    const logos = [{ src: reactLogo, name: 'React' }, { src: pandasLogo, name: 'Pandas' }, { src: nodeLogo, name: 'Node.js' }, { src: tailwindLogo, name: 'Tailwind' }, { src: flaskLogo, name: 'Flask' }, { src: seleniumLogo, name: 'Selenium' }, { src: expressLogo, name: 'Express' }, { src: puppeteerLogo, name: 'Puppeteer' }];

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
            {renderLogos()}
        </div>
        <div className='logos-slide'>
            {renderLogos()}
            {renderLogos()}
        </div>
    </div>
  )
}

export default TechStackLibCarousel