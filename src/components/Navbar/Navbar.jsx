import React from 'react'
import ReactDOM from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='secondary-navbar'>
                <ul className='nav-menu'>
                    <Link to='/about'><li>About us</li></Link>
                    <Link to='/faq'><li>FAQ</li></Link>
                    <Link to='/blog'><li>Blog</li></Link>
                    <Link to='/contact'><li>Contact us</li></Link>
                </ul>
                <div className='currencies'>
                    <div className='US'>US$</div>
                    <div className='arrow_btn'>
                        <span class="material-symbols-outlined">
                            expand_all
                        </span>
                    </div>
                </div>
            </div>
            <div className='main-navbar'>
                <div className='nav_link'>

                    <Link to='/destinations'><h4>Destinations</h4></Link>
                    <h4>Private trips</h4>
                </div>
                <div className='nav-logo'>
                    <img src={logo} alt="" />
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