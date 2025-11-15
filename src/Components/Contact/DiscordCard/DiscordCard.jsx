import React from 'react'
import './DiscordCard.css'
import discordIcon from '../../../assets/ContactIcons/icons8-discord-50.png'
import CopyClipboardBtn from '../../CopyClipboardBtn/CopyClipboardBtn'

function DiscordCard() {
  return (
    <div id='discord-card-container' className='card'>
        <div id='discord-card-content' className='card-content'>
            <div className='icon contact-icon' id='discord-icon'></div><h4>@devangmalhotra</h4>
            <CopyClipboardBtn text='devangmalhotra'/>
        </div>
    </div>
  )
}

export default DiscordCard