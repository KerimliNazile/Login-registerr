import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul className='mainNavbar'>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/login"}>LogIn</NavLink></li>
        <li><NavLink to={"/signin"}>SignIn</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
