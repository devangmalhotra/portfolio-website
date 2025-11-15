import React, { useState } from 'react'
import './CopyClipboardBtn.css'

function CopyClipboardBtn(props) {
    const [animating, setAnimating] = useState(false);

    const handleClick = async () => {
        await navigator.clipboard.writeText(props.text);
    }

  return (
    <div id='clipboard-btn-container'>
        <button id='clipboard-btn' onClick={handleClick}>
            <div className='icon' id='clipboard-icon'></div>
        </button>
        <h4 className={animating ? 'copied-animating' : ''}>Copied!</h4>
    </div>
  )
}

export default CopyClipboardBtn