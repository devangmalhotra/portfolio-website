import React from 'react'
import './MainContentContainer.css'
import HelloCard from '../HelloCard/HelloCard'
import TechStackCard from '../TechStackCard/TechStackCard'
import NavBar from '../NavBar/NavBar'
import LocationCard from '../LocationCard/LocationCard'
import GithubCard from '../GithubCard/GithubCard'
import LinkedinCard from '../LinkedinCard/LinkedinCard'
import { useState } from 'react'

function MainContentContainer() {
    const [activeSection, setActiveSection] = useState('home');

    const handleSectionClick = (section) => {
        console.log(section);
    }

  return (
    <div id='main-content-container'>
        <NavBar />
        <div id='home-page' className='page'>
            <HelloCard />
            <TechStackCard />
            <LocationCard />
            <GithubCard />
            <LinkedinCard />
        </div>
    </div>
  )
}

export default MainContentContainer