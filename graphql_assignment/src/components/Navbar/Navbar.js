import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from '../dropdown/dropdown.js'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false);
  }

  const mouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const mouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">
          LOGO
      </div>
        <div className = "navbar-right" >
          <div className={click ? 'nav-items-active' : "nav-items" }>
            <ul >
              <li className="nav-links">
                <Link to="/"   onClick={closeMobileMenu}>
                  Home
             </Link>
              </li>
              <li className="nav-links" 
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
             >   
                <Link to="/political"  onClick={closeMobileMenu} >
                  Categories <i className='fa fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li className="nav-links">
                <Link to="/aboutus"  onClick={closeMobileMenu}>
                  About us
             </Link>
              </li>
              <li className="nav-links">
                <Link to="/contactus" >
                  Contact us
             </Link>
              </li>
            </ul>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>



    </>
  )

}

export default Navbar