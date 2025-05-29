import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../public/our-services-icon-5.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ToggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const ToggleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <nav className=" fixed top-0 left-0 z-20 w-full text-white font-semibold font-CormorantGaramond flex justify-between items-center p-2">
        <div>
          <img src={Logo} alt="LOgo" className=" w-14" />
        </div>

        <ul className=" hidden md:flex gap-10">
          <li>
            <NavLink to="" onClick={ToggleClose}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" onClick={ToggleClose}>
              About
            </NavLink>
          </li>
        </ul>

        <div onClick={ToggleOpen} className="md:hidden text-2xl cursor-pointer">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`flex justify-center items-center flex-col h-full md:hidden text-white fixed top-0 left-0 transition-all duration-300 border-r-4 border-yellow-500 z-50 overflow-hidden ${
            isOpen ? 'w-56' : 'w-0'
          } `}
        >
          <ul>
            <li>
              <NavLink to="" onClick={ToggleClose} className="w-full">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
