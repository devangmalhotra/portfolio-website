import React from 'react'
import './NavBar.css'
import homeIcon from '../../assets/NavBarIcons/icons8-home-50.png'
import experienceIcon from '../../assets/NavBarIcons/icons8-briefcase-64.png'
import projectsIcon from '../../assets/NavBarIcons/icons8-projects-50.png'
import contactIcon from '../../assets/NavBarIcons/icons8-contact-50.png'

function NavBar(props) {

  return (
    <div id='navbar-card-container'>
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li onClick={props.handleSectionClick.bind(this, 'home')} className={props.activeSection == 'home' ? 'navbar-active' : ''}><img className='navbar-link-icon' src={homeIcon} alt="" />Home</li>
                <li onClick={props.handleSectionClick.bind(this, 'experience')} className={props.activeSection == 'experience' ? 'navbar-active' : ''}><img className='navbar-link-icon' src={experienceIcon} alt="" />Experience</li>
                <li onClick={props.handleSectionClick.bind(this, 'projects')} className={props.activeSection == 'projects' ? 'navbar-active' : ''}><img className='navbar-link-icon' src={projectsIcon} alt="" />Projects</li>
                <li onClick={props.handleSectionClick.bind(this, 'contact')} className={props.activeSection == 'contact' ? 'navbar-active' : ''}><img className='navbar-link-icon' src={contactIcon} alt="" />Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar