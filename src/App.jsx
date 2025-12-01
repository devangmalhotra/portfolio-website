import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundSquares from './Components/BackgroundSquares/BackgroundSquares'
import MainContentContainer from './Components/MainContentContainer/MainContentContainer'
import MainContentContainerMobile from './Components/MainContentContainerMobile/MainContentContainerMobile'

function App() {
  const [mode, setMode] = useState("Dark");

  const handleLightDarkClick = () => {
        mode == "Dark" ? setMode("Light") : setMode("Dark");
  }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setMode("Light");
    } else {
      setMode("Dark")
    }
  }, [])

  return (
    <div id='main'>
      <BackgroundSquares />
      <div id='desktop-view'>
        <MainContentContainer mode={mode} handleLightDarkClick={handleLightDarkClick} />
      </div>
      <div id='mobile-view'>
        <MainContentContainerMobile mode={mode} handleLightDarkClick={handleLightDarkClick} />
      </div>
    </div>
  )
}

export default App
