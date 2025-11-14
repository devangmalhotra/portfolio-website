import React from 'react'
import './NavBar.css'
import homeIcon from '../../assets/NavBarIcons/icons8-home-50.png'
import experienceIcon from '../../assets/NavBarIcons/icons8-briefcase-64.png'
import projectsIcon from '../../assets/NavBarIcons/icons8-projects-50.png'
import contactIcon from '../../assets/NavBarIcons/icons8-contact-50.png'

function NavBar(props) {

  return (
    <div id='navbar-card-container' className='card'>
        <nav className='navbar card-content'>
            <ul className='navbar-links'>
                <li onClick={props.handleSectionClick.bind(this, 'home')} className={props.activeSection == 'home' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='home-icon'></div>Home</li>
                <li onClick={props.handleSectionClick.bind(this, 'experience')} className={props.activeSection == 'experience' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='experience-icon'></div>Experience</li>
                <li onClick={props.handleSectionClick.bind(this, 'projects')} className={props.activeSection == 'projects' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='projects-icon'></div>Projects</li>
                <li onClick={props.handleSectionClick.bind(this, 'contact')} className={props.activeSection == 'contact' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='contact-icon'></div>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar