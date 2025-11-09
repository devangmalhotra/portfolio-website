import React from 'react'
import './MainContentContainer.css'
import HelloCard from '../HelloCard/HelloCard'
import TechStackCard from '../TechStackCard/TechStackCard'
import NavBar from '../NavBar/NavBar'
import LocationCard from '../LocationCard/LocationCard'
import GithubCard from '../GithubCard/GithubCard'
import LinkedinCard from '../LinkedinCard/LinkedinCard'

function MainContentContainer() {
  return (
    <div id='main-content-container'>
        <HelloCard />
        <TechStackCard />
        <NavBar />
        <LocationCard />
        <GithubCard />
        <LinkedinCard />
    </div>
  )
}

export default MainContentContainer