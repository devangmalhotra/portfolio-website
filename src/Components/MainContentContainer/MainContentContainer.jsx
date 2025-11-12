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