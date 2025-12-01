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
    const query = window.matchMedia('(prefers-color-scheme: light)');
    query.matches ? setMode("Light") : setMode("Dark");

    const handleQuery = (e) => {
      e.matches ? setMode("Light") : setMode("Dark");
    }

    query.addEventListener("change", handleQuery);
    

    return(() => {
      query.removeEventListener("change", handleQuery);
    }); // putting in function rather than useeffect lets the listener run first (return statement is the cleanup function)
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
