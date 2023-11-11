import React from 'react'
import Logo from "../../components/Assets/Logo.svg"
import './Footer.css'
import { Data } from "../../utils/data"
function Footer() {
    const menuArray = Object.entries(Data.menu);
    const supportArray = Object.entries(Data.support);
    const followArray = Object.entries(Data.following);
    const m_transformedArray = menuArray.map(([key, value]) => <li key={key}>{value}</li>);
    const s_transformedArray = supportArray.map(([key, value]) => <li key={key}>{value}</li>);
    const f_transformedArray = followArray.map(([key, value]) => <li key={key}>{value}</li>);
    return (
        <div className='footer'>
            <div className='footer_wrapper'>
                <div className='tourista'>
                    <img src={Logo} alt="tourist_logo"/>
                    <p>Discover the world's wonders and let us be <br/>your trusted guide to extraordinary destinations.</p>
                    <div className='copyright'>© Copyright 2023 Tourista Ltd. All Rights Reserved.</div>
                </div>
                <div className='menu'>
                    <h4>Menu</h4>
                    <ul>
                        {m_transformedArray}
                    </ul>
                </div>
                <div className='support'>
                    <h4>Support</h4>
                    <ul>
                        {s_transformedArray}
                    </ul>
                </div>
                <div className='follow_us'>
                    <h4>Follow us</h4>
                    <ul>
                        {f_transformedArray}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer