import React from 'react'
import './joinUsSection.css';

function JoinUsSection() {
    return (
        <div className='joinSection'>
            <div className='join_Wrapper'>
                <h2>Join our travel revolution</h2>
                <p>Sign up to stay in the know - hot new travel spots, <br />
                    how we strive to make the world a better place, and all sorts of surprises.</p>
                <div className='input-container'>
                    <input type="email" placeholder='Email' className='email-input' />
                    <button className='sign-up-btn'>Sign up</button>
                </div>

            </div>
        </div>
    )
}

export default JoinUsSection