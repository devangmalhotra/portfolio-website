import React from 'react'
import './NavBar.css'
import LightDarkToggle from '../LightDarkToggle/LightDarkToggle'
import { AnimatePresence, motion } from 'motion/react'

function NavBar(props) {

  return (
    <motion.div id='navbar-card-container' className='card' initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} exit={{ opacity: 0, x: -100 }} key='navbar'>
        <nav className='navbar card-content'>
          <ul className='navbar-links'>
            {props.mobileNavBar ? (<li onClick={() => {props.handleSectionClick('home'); props.handleHamburgerClick()}}className={props.activeSection == 'home' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='home-icon'></div>Home</li>) : (<li onClick={() => {props.handleSectionClick('home'); }}className={props.activeSection == 'home' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='home-icon'></div>Home</li>)}
            {props.mobileNavBar ? (<li onClick={() => {props.handleSectionClick('experience'); props.handleHamburgerClick()}}className={props.activeSection == 'experience' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='experience-icon'></div>Experience</li>) : (<li onClick={() => {props.handleSectionClick('experience'); }}className={props.activeSection == 'experience' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='experience-icon'></div>Experience</li>)}
            {props.mobileNavBar ? (<li onClick={() => {props.handleSectionClick('projects'); props.handleHamburgerClick()}}className={props.activeSection == 'projects' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='projects-icon'></div>Projects</li>) : (<li onClick={() => {props.handleSectionClick('projects'); }}className={props.activeSection == 'projects' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='projects-icon'></div>Projects</li>)}
            {props.mobileNavBar ? (<li onClick={() => {props.handleSectionClick('contact'); props.handleHamburgerClick()}}className={props.activeSection == 'contact' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='contact-icon'></div>Contact</li>) : (<li onClick={() => {props.handleSectionClick('contact'); }}className={props.activeSection == 'contact' ? 'navbar-active' : ''}><div className='navbar-icon icon' id='contact-icon'></div>Contact</li>)}
            <LightDarkToggle />
          </ul>
        </nav>
    </motion.div>
  )
}

export default NavBar