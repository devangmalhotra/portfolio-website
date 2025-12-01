import React from 'react'
import './MainContentContainer.css'
import HelloCard from '../Home/HelloCard/HelloCard'
import TechStackCard from '../Home/TechStackCard/TechStackCard'
import NavBar from '../NavBar/NavBar'
import LocationCard from '../Home/LocationCard/LocationCard'
import GithubCard from '../Home/GithubCard/GithubCard'
import LinkedinCard from '../Home/LinkedinCard/LinkedinCard'
import EmailCard from '../Contact/EmailCard/EmailCard'
import PhoneCard from '../Contact/PhoneCard/PhoneCard'
import DiscordCard from '../Contact/DiscordCard/DiscordCard'
import ProjectsMain from '../Projects/ProjectsMain/ProjectsMain'
import ExperiencesMain from '../Experience/ExperiencesMain/ExperiencesMain'
import { motion } from "motion/react"
import { useState } from 'react'

function MainContentContainer(props) {
    const [activeSection, setActiveSection] = useState('home');

    const handleSectionClick = (section) => {
        setActiveSection(section);

        console.log("Section changed to:", section);
    }

    const sections = [{ name: 'home', content: (
    <div id='home-page' className='page'>
                <HelloCard />
                <TechStackCard />
                <LocationCard />
                <GithubCard />
                <LinkedinCard />
            </div>
            ) }, { name: 'experience', content: (
    <div id='experiences-page'>
                <ExperiencesMain />
            </div>
            ) }, { name: 'projects', content: (
    <div id='projects-page'>
                <ProjectsMain />
            </div>
            ) }, { name: 'contact', content: (
    <div id='contact-page' className='page'>
                <EmailCard />
                <PhoneCard />
                <DiscordCard />
            </div>
            ) }]

    const renderActiveSection = () => {
        return sections.find(section => section.name === activeSection).content
    }

  return (
    <motion.div id='main-content-container' >
        <NavBar handleSectionClick={handleSectionClick} activeSection={activeSection} mode={props.mode} handleLightDarkClick={props.handleLightDarkClick}/>
        <div id='pages-container'>
            {renderActiveSection()}
        </div>

    </motion.div>
  )
}

export default MainContentContainer