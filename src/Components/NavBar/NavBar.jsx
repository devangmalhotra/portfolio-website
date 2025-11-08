import React from 'react'
import './NavBar.css'
import homeIcon from '../../assets/NavBarIcons/icons8-house-64.png'
import experienceIcon from '../../assets/NavBarIcons/icons8-briefcase-64.png'
import projectsIcon from '../../assets/NavBarIcons/icons8-projects-50.png'
import contactIcon from '../../assets/NavBarIcons/icons8-contact-50.png'

function NavBar() {
  return (
    <div id='navbar-card-container'>
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li><img className='navbar-link-icon' src={homeIcon} alt="" />Home</li>
                <li><img className='navbar-link-icon' src={experienceIcon} alt="" />Experience</li>
                <li><img className='navbar-link-icon' src={projectsIcon} alt="" />Projects</li>
                <li><img className='navbar-link-icon' src={contactIcon} alt="" />Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar