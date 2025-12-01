import React, { useEffect, useState } from 'react'
import './LightDarkToggle.css'

function LightDarkToggle() {
    const [mode, setMode] = useState("Dark");
    let root = document.documentElement;

    const handleLightDarkClick = () => {
        mode == "Dark" ? setMode("Light") : setMode("Dark");
    }

    useEffect(() => {
        if (mode === "Dark") {
            root.style.setProperty('--background-main', '#0A0A12');
            root.style.setProperty('--grid-square-border', '#1A1A27');
            root.style.setProperty('--card-background', '#151522');
            root.style.setProperty('--card-border', '#2A2A40');
            root.style.setProperty('--text-main', '#E4E6F0');
        } else if (mode === "Light") {
            root.style.setProperty('--background-main', 'linear-gradient(135deg, #A4C8FF, #F5D3A3');
            root.style.setProperty('--grid-square-border', '#dce0ebff');
            root.style.setProperty('--card-background', '#F1F4FB');
            root.style.setProperty('--card-border', '#D1D6E2');
            root.style.setProperty('--text-main', '#2F2F2F');

        }
    }, [mode])

  return (
    <div id='light-dark-toggle-container'>
        <button id='light-dark-button' onClick={handleLightDarkClick}><div id='mode-icon' className={`${mode.toLowerCase()}-mode icon`}></div>{`${mode} Mode`}</button>
    </div>
  )
}

export default LightDarkToggle