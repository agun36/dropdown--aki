import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iconArrow from '../assets/images/icon-arrow-up.svg'
import iconArrowDown from '../assets/images/icon-arrow-down.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminder from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'

export const MobileNav = ({ navBarOpen }) => {
  console.log(navBarOpen)
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
    <div className={`mobile-nav ${navBarOpen ? 'open' : ''}`}>
      <div className='nav-link-mobile'>
        <div
          className='dropdown-mobile'
          onMouseEnter={handleDropDownOpen}
          onMouseLeave={handleDropDownClose}
        >
          <div className='icon-dropdown text-link' onClick={handleToggle}>
            Features
            {open ? (
              <img src={iconArrow} alt='' />
            ) : (
              <img src={iconArrowDown} alt='' />
            )}
          </div>
          {open ? (
            <ul
              className='dropdown-menu dropdown_menu-list'
              onClick={handleDropDownOpen}
            >
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
          <div className='icon-dropdown text-link' onClick={handleToggle}>
            Company
            {open2 ? (
              <img src={iconArrow} alt='' />
            ) : (
              <img src={iconArrowDown} alt='' />
            )}
          </div>
          {open2 ? (
            <ul className='dropdown-menu' onClick={handleDropDownOpen2}>
              <li className='dropdown-item'>History</li>
              <li className='dropdown-item'>Our Team</li>
              <li className='dropdown-item'>Our Blog</li>
            </ul>
          ) : null}
        </div>
        <ul>
          <li>
            <Link className='text-link' to='/career' onClick={handleToggle}>
              Careers
            </Link>
          </li>
          <li>
            <Link className='text-link' to='/about' onClick={handleToggle}>
              About
            </Link>
          </li>
        </ul>
        <div className='nav-btns-mobile' onClick={handleToggle}>
          <button className='login-btn-mobile'>Login</button>
          <button className='reg-btn-mobile'>Register</button>
        </div>
      </div>
    </div>
  )
}
