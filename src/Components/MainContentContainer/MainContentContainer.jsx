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
        setActiveSection(section);

        console.log("Section changed to:", section);
    }

  return (
    <div id='main-content-container'>
        <NavBar handleSectionClick={handleSectionClick} activeSection={activeSection}/>
        <div id='home-page' className={activeSection == 'home' ? 'page' : 'page inactive-page'}>
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