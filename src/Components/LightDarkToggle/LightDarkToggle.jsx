import React, { useEffect, useState } from 'react'
import './LightDarkToggle.css'

function LightDarkToggle(props) {
    let root = document.documentElement;

    useEffect(() => {
        if (props.mode === "Dark") {
            root.style.setProperty('--background-main', '#0A0A12');
            root.style.setProperty('--grid-square-border', '#1A1A27');
            root.style.setProperty('--card-background', '#151522');
            root.style.setProperty('--card-border', '#2A2A40');
            root.style.setProperty('--text-main', '#E4E6F0');
            root.style.setProperty('--subtext', '#979BB2');
            root.style.setProperty('--accent', '#aaa1ff');
            root.style.setProperty('--hover', '#7667ff44');
            root.style.setProperty('--navigator-hover-card-background', '#7667ff44');
            root.style.setProperty('--navbar-screen-block', 'rgb(27, 27, 43)');
        } else if (props.mode === "Light") {
            root.style.setProperty('--background-main', 'linear-gradient(135deg, #95c0ffff, #ecf196ff');
            root.style.setProperty('--grid-square-border', '#dce0ebff');
            root.style.setProperty('--card-background', '#F1F4FB');
            root.style.setProperty('--card-border', '#D1D6E2');
            root.style.setProperty('--text-main', '#2F2F2F');
            root.style.setProperty('--subtext', '#585858');
            root.style.setProperty('--accent', '#6A4CFF');
            root.style.setProperty('--hover', '#c0dbfbff');
            root.style.setProperty('--navigator-hover-card-background', '#99aaf4ff');
            root.style.setProperty('--navbar-screen-block', '#ab9bfaff');

        }
    }, [props.mode])

  return (
    <div id='light-dark-toggle-container'>
        <button id='light-dark-button' onClick={props.handleLightDarkClick}><div id='mode-icon' className={`${props.mode.toLowerCase()}-mode icon`}></div><h5>{`${props.mode} Mode`}</h5></button>
    </div>
  )
}

export default LightDarkToggle