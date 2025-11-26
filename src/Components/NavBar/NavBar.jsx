import React from 'react'
import './NavBar.css'
import { motion } from 'motion/react'

function NavBar(props) {

  return (
    <motion.div id='navbar-card-container' className='card' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
        <nav className='navbar card-content'>
          <div id='navbar-close'></div>
          <ul className='navbar-links'>
              <li onClick={props.handleSectionClick.bind(this, 'home')} className={props.activeSection == 'home' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='home-icon'></div>Home</li>
              <li onClick={props.handleSectionClick.bind(this, 'experience')} className={props.activeSection == 'experience' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='experience-icon'></div>Experience</li>
              <li onClick={props.handleSectionClick.bind(this, 'projects')} className={props.activeSection == 'projects' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='projects-icon'></div>Projects</li>
              <li onClick={props.handleSectionClick.bind(this, 'contact')} className={props.activeSection == 'contact' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='contact-icon'></div>Contact</li>
          </ul>
        </nav>
    </motion.div>
  )
}

export default NavBar