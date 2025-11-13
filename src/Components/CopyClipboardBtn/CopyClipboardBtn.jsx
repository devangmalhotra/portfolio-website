import React, { useState } from 'react'
import './CopyClipboardBtn.css'
import clipboardIcon from '../../assets/icons8-copy-16.png'

function CopyClipboardBtn(props) {
    const [animating, setAnimating] = useState(false);

    const handleClick = async () => {
        await navigator.clipboard.writeText(props.text);
    }

  return (
    <div id='clipboard-btn-container'>
        <button id='clipboard-btn' onClick={handleClick}>
            <img src={clipboardIcon} alt="" />
        </button>
        <h4 className={animating ? 'copied-animating' : ''}>Copied!</h4>
    </div>
  )
}

export default CopyClipboardBtn