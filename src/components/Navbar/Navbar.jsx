import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../../public/Assets/Logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    const [activeLink, setActiveLink] = useState(null);
    const handleLinkClick = (index) => {
        setActiveLink(index);
    }



    return (
        <div className='navbar'>
            <div className='secondary-navbar'>
                <ul className='nav-menu'>
                    <Link to='/about'><li style={{ color: activeLink === 0 ? '#4A21EF' : '' }} onClick={() => handleLinkClick(0)}>About us</li></Link>
                    <Link to='/faq'><li style={{ color: activeLink === 1 ? '#4A21EF' : '' }} onClick={() => handleLinkClick(1)}>FAQ</li></Link>
                    <Link to='/blog'><li style={{ color: activeLink === 2 ? '#4A21EF' : '' }} onClick={() => handleLinkClick(2)}>Blog</li></Link>
                    <Link to='/contact'><li style={{ color: activeLink === 3 ? '#4A21EF' : '' }} onClick={() => handleLinkClick(3)}>Contact us</li></Link>
                </ul>
                <div className='currencies'>
                    <div className='US'>US$</div>
                    <div className='arrow_btn'>
                        <span className="material-symbols-outlined">
                            expand_all
                        </span>
                    </div>
                </div>
            </div>
            <div className='main-navbar'>
                <div className='nav_link'>

                    <Link to='/destinations'><h4 style={{ color: activeLink === 4 ? '#4A21EF' : '' }} onClick={() => handleLinkClick(4)}>Destinations</h4></Link>
                    <h4>Private trips</h4>
                </div>
                <div className='nav-logo'>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className='nav_buttons'>
                    <button className='lucky_btn'>I'm Feeling Lucky</button>
                    <Link to='/signIn'><button className='login_btn'>Login</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar;