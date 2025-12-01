import React, { useState } from 'react'
import './LightDarkToggle.css'

function LightDarkToggle() {
    const [mode, setMode] = useState("Dark");

    const handleLightDarkClick = () => {
        mode == "Dark" ? setMode("Light") : setMode("Dark")
    }

  return (
    <div id='light-dark-toggle-container'>
        <button id='light-dark-button' onClick={handleLightDarkClick}><div id='mode-icon' className={`${mode.toLowerCase()}-mode icon`}></div>{`${mode} Mode`}</button>
    </div>
  )
}

export default LightDarkToggle