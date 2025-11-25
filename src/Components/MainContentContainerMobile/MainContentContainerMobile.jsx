import React from 'react'
import './MainContentContainerMobile.css'
import HelloCard from '../Home/HelloCard/HelloCard'
import TechStackCard from '../Home/TechStackCard/TechStackCard'
import GithubCard from '../Home/GithubCard/GithubCard'
import LinkedinCard from '../Home/LinkedinCard/LinkedinCard'
import LocationCard from '../Home/LocationCard/LocationCard'
import NavBar from '../NavBar/NavBar'

function MainContentContainerMobile() {
  return (
    <div id='main-content-container-mobile'>
        <div id='mobile-navbar-hamburger'></div>
        <HelloCard />
        <LocationCard />
        <TechStackCard />
        <GithubCard />
        <LinkedinCard />
    </div>
  )
}

export default MainContentContainerMobile