import React from 'react'
import './MainContentContainerMobile.css'
import HelloCard from '../Home/HelloCard/HelloCard'
import TechStackCard from '../Home/TechStackCard/TechStackCard'
import GithubCard from '../Home/GithubCard/GithubCard'
import LinkedinCard from '../Home/LinkedinCard/LinkedinCard'
import LocationCard from '../Home/LocationCard/LocationCard'
import NavBar from '../NavBar/NavBar'
import ExperiencesMain from '../Experience/ExperiencesMain/ExperiencesMain'
import ProjectsMain from '../Projects/ProjectsMain/ProjectsMain'
import EmailCard from '../Contact/EmailCard/EmailCard'
import PhoneCard from '../Contact/PhoneCard/PhoneCard'
import DiscordCard from '../Contact/DiscordCard/DiscordCard'
import { motion } from 'motion/react'
import { useState } from 'react'

function MainContentContainerMobile() {
    const [activeSection, setActiveSection] = useState('home');
    const [navBarOpen, setNavBarOpen] = useState(false);

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

    const handleSectionClick = (section) => {
        setActiveSection(section);

        console.log("Section changed to:", section);
    }

    const renderActiveSection = () => {
        return sections.find(section => section.name === activeSection).content
    }

    const handleHamburgerClick = () => {
        setNavBarOpen(!navBarOpen);
    }

    const showNavBar = () => {
        if (navBarOpen) {
            return (<div id='mobile-navbar-container'><motion.div id='screen-block' onClick={handleHamburgerClick} initial={{ scale: 0 }} animate={{ scale: 4 }} whileInView={{ opacity: 0.75 }}></motion.div><NavBar handleSectionClick={handleSectionClick} activeSection={activeSection} mobileNavBar={true} handleHamburgerClick={handleHamburgerClick}/></div>)
        }
    }

  return (
    <div id='main-content-container-mobile'>
        {showNavBar()}
        <motion.div id='mobile-navbar-hamburger-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }} onClick={handleHamburgerClick}>
            <div id='mobile-navbar-hamburger' className='icon'></div>
        </motion.div>
        <div id='mobile-pages-container'>
            {renderActiveSection()}
        </div>
    </div>
  )
}

export default MainContentContainerMobile