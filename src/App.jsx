import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundSquares from './Components/BackgroundSquares/BackgroundSquares'
import MainContentContainer from './Components/MainContentContainer/MainContentContainer'

function App() {

  return (
    <div id='main'>
      <BackgroundSquares />
      <div id='desktop-view'>
        <MainContentContainer />
      </div>
      <div id='mobile-view'></div>
    </div>
  )
}

export default App
