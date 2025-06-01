import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Portfolio</li>
            <li>Hire Me</li>
        </ul>
        <div className="nav-hire">Hire Me</div>
    </div>
  )
}

export default NavBar