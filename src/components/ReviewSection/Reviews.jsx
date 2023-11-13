import React from 'react'
import { FaHiking } from 'react-icons/fa';
import './reviews.css'

function Reviews({ text, strong_text, testimonial_info, region_name, text1, text2, text3, backgroundImage }) {
    const wrapperStyle = {
        backgroundImage: `url(${backgroundImage})`,

    }
    return (
        <div className='review_Section' style={wrapperStyle}>
            <div className='text_container'>
                <div className='review_text_container'>
                    <div className='review_text'>
                        <p>{text}</p>
                        <strong>{strong_text}</strong>
                        <span className='span1'>{testimonial_info}</span>
                        <span className='span2'>{region_name}</span>
                    </div>
                </div>
                <div className='local_expert_container'>
                    <div className='local_expert'>
                        <FaHiking className='icon' />
                        <div className='expert_name'>
                            <span className='name'>{text1}</span>
                            <div className='expert_name_text'>
                                <span>{text2}</span>
                                <p>{text3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Reviews