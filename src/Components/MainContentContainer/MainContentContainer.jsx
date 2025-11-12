import React from 'react'
import './MainContentContainer.css'
import HelloCard from '../Home/HelloCard/HelloCard'
import TechStackCard from '../Home/TechStackCard/TechStackCard'
import NavBar from '../NavBar/NavBar'
import LocationCard from '../Home/LocationCard/LocationCard'
import GithubCard from '../Home/GithubCard/GithubCard'
import LinkedinCard from '../Home/LinkedinCard/LinkedinCard'
import { useState } from 'react'

function MainContentContainer() {
    const [activeSection, setActiveSection] = useState('home');

    const handleSectionClick = (section) => {
        setActiveSection(section);

        console.log("Section changed to:", section);
    }

    const sections = [{ name: 'home', content: (
    <div id='home-page' className={activeSection == 'home' ? 'page' : 'page inactive-page'}>
                <HelloCard />
                <TechStackCard />
                <LocationCard />
                <GithubCard />
                <LinkedinCard />
            </div>
            ) }, { name: 'experience', content: (
    <div id='experience-page' className={activeSection == 'experience' ? 'page' : 'page inactive-page'}>
                <HelloCard />
                <TechStackCard />
                <LocationCard />
                <GithubCard />
                <LinkedinCard />
            </div>
            ) }]

    const renderActiveSection = () => {
        return sections.find(section => section.name === activeSection).content
    }

  return (
    <div id='main-content-container'>
        <NavBar handleSectionClick={handleSectionClick} activeSection={activeSection}/>
        <div id='pages-container'>
            {renderActiveSection()}
        </div>
    </div>
  )
}

export default MainContentContainer