import React from 'react'
import { useState } from 'react'
import iconArrow from '../assets/images/icon-arrow-up.svg'
import iconArrowDown from '../assets/images/icon-arrow-down.svg'
import openIcon from '../assets/images/icon-menu.svg'
import closeIcon from '../assets/images/icon-close-menu.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminder from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import { Link } from 'react-router-dom'
import { MobileNav } from './MobileNav'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const handleDropDownOpen = () => {
    setOpen(true)
  }
  const handleDropDownClose = () => {
    setOpen(false)
  }
  const handleDropDownOpen2 = () => {
    setOpen2(true)
  }
  const handleDropDownClose2 = () => {
    setOpen2(false)
  }

  return (
    <nav>
      <div className='d-flex'>
        <div className='nav-logo'>snap</div>
        <div className='nav-links'>
          <div
            className='dropdown'
            onMouseEnter={handleDropDownOpen}
            onMouseLeave={handleDropDownClose}
          >
            <Link
              to='/features'
              className='icon-dropdown text-link'
              onClick={handleToggle}
            >
              Features
              {open ? (
                <img src={iconArrow} alt='' />
              ) : (
                <img src={iconArrowDown} alt='' />
              )}
            </Link>
            {open ? (
              <ul className='dropdown-menu' onMouseEnter={handleDropDownOpen}>
                <li className='dropdown-item'>
                  <img src={todo} alt='' /> Todo List
                </li>
                <li className='dropdown-item'>
                  <img src={calender} alt='' /> Calender
                </li>
                <li className='dropdown-item'>
                  <img src={reminder} alt='' /> Reminders
                </li>
                <li className='dropdown-item'>
                  <img src={planning} alt='' /> Planning
                </li>
              </ul>
            ) : null}
          </div>
          <div
            className='dropdown'
            onMouseEnter={handleDropDownOpen2}
            onMouseLeave={handleDropDownClose2}
          >
            <Link
              to='/features'
              className='icon-dropdown text-link'
              onClick={handleToggle}
            >
              Company
              {open2 ? (
                <img src={iconArrow} alt='' />
              ) : (
                <img src={iconArrowDown} alt='' />
              )}
            </Link>
            {open2 ? (
              <ul className='dropdown-menu' onMouseEnter={handleDropDownOpen2}>
                <li className='dropdown-item'>History</li>
                <li className='dropdown-item'>Our Team</li>
                <li className='dropdown-item'>Our Blog</li>
              </ul>
            ) : null}
          </div>

          <Link className='text-link' to='/career' onClick={handleToggle}>
            Careers
          </Link>
          <Link className='text-link' to='/about' onClick={handleToggle}>
            About
          </Link>
        </div>
      </div>

      <div className='nav-btns' onClick={handleToggle}>
        <button className='login-btn'>Login</button>
        <button className='reg-btn'>Register</button>
      </div>

      <MobileNav navBarOpen={navbarOpen} />
      <div className='menu-icon' onClick={handleToggle}>
        {navbarOpen ? (
          <img src={closeIcon} alt='' />
        ) : (
          <img src={openIcon} alt='' />
        )}
      </div>
    </nav>
  )
}

export default Navbar
