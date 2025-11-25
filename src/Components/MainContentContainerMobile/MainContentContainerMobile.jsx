import React from 'react'
import './MainContentContainerMobile.css'
import HelloCard from '../Home/HelloCard/HelloCard'
import TechStackCard from '../Home/TechStackCard/TechStackCard'
import GithubCard from '../Home/GithubCard/GithubCard'
import LinkedinCard from '../Home/LinkedinCard/LinkedinCard'
import LocationCard from '../Home/LocationCard/LocationCard'
import NavBar from '../NavBar/NavBar'
import { motion } from 'motion/react'

function MainContentContainerMobile() {
  return (
    <div id='main-content-container-mobile'>
        <motion.div id='mobile-navbar-hamburger-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
            <div id='mobile-navbar-hamburger' className='icon'></div>
        </motion.div>
        <div id='mobile-pages-container'>
            <HelloCard />
            <LocationCard />
            <TechStackCard />
            <GithubCard />
            <LinkedinCard />
        </div>
    </div>
  )
}

export default MainContentContainerMobile