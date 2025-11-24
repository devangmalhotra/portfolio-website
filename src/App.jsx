import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundSquares from './Components/BackgroundSquares/BackgroundSquares'
import MainContentContainer from './Components/MainContentContainer/MainContentContainer'
import MainContentContainerMobile from './Components/MainContentContainerMobile/MainContentContainerMobile'

function App() {

  return (
    <div id='main'>
      <BackgroundSquares />
      <div id='desktop-view'>
        <MainContentContainer />
      </div>
      <div id='mobile-view'>
        <MainContentContainerMobile />
      </div>
    </div>
  )
}

export default App
