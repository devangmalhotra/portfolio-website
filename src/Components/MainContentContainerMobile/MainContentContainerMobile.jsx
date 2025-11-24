import React from 'react'
import './MainContentContainerMobile.css'
import HelloCard from '../Home/HelloCard/HelloCard'
import TechStackCard from '../Home/TechStackCard/TechStackCard'

function MainContentContainerMobile() {
  return (
    <div id='main-content-container-mobile'>
        <HelloCard />
        <TechStackCard />
    </div>
  )
}

export default MainContentContainerMobile