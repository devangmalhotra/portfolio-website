import React from 'react'
import './MainContentContainer.css'
import HelloCard from '../HelloCard/HelloCard'
import TechStackCard from '../TechStackCard/TechStackCard'
import NavBar from '../NavBar/NavBar'
import LocationCard from '../LocationCard/LocationCard'
import GithubCard from '../GithubCard/GithubCard'

function MainContentContainer() {
  return (
    <div id='main-content-container'>
        <HelloCard />
        <TechStackCard />
        <NavBar />
        <LocationCard />
        <GithubCard />
    </div>
  )
}

export default MainContentContainer