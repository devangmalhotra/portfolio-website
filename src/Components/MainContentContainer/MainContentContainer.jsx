import React from 'react'
import './MainContentContainer.css'
import HelloCard from '../HelloCard/HelloCard'
import TechStackCard from '../TechStackCard/TechStackCard'

function MainContentContainer() {
  return (
    <div id='main-content-container'>
        <HelloCard />
        <TechStackCard />
    </div>
  )
}

export default MainContentContainer