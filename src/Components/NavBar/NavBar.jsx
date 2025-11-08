import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div id='navbar-card-container'>
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li>Home</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar