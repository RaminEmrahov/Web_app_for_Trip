import React from 'react'
import './Expert.css'
import Photo1 from '../../../public/Assets/Callcenter.png'
import Photo2 from '../../../public/Assets/Travel expert.png'

const Expert = () => {
    return (
        <div className='expert_Section'>
            <div className='expert_Wrapper'>
                <h1>Our Local Experts</h1>
                <div className='img_wrapper'>
                    <div className='photo1'><img src={Photo1} alt="" /></div>
                    <p className='text1'>Why trust Gary in Florida to
                        plan your trip to South Africa?</p>
                    <div className='photo2'>
                        <img src={Photo2} alt="" />
                    </div>
                    <p className='text2'>When Angela in
                        Johannesburg knows best.</p>
                </div>
            </div>
        </div>
    )
}

export default Expert