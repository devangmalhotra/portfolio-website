import React from 'react'
import './MainContentContainer.css'
import HelloCard from '../HelloCard/HelloCard'
import TechStackCard from '../TechStackCard/TechStackCard'
import NavBar from '../NavBar/NavBar'

function MainContentContainer() {
  return (
    <div id='main-content-container'>
        <HelloCard />
        <TechStackCard />
        <NavBar />
    </div>
  )
}

export default MainContentContainer