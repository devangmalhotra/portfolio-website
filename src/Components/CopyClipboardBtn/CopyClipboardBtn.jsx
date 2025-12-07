import React, { useState } from 'react'
import './CopyClipboardBtn.css'

function CopyClipboardBtn(props) {
    const handleClick = async () => {
        await navigator.clipboard.writeText(props.text);
    }

  return (
    <div id='clipboard-btn-container'>
        <button id='clipboard-btn' onClick={handleClick}>
            <div className='icon' id='clipboard-icon'></div>
        </button>
    </div>
  )
}

export default CopyClipboardBtn