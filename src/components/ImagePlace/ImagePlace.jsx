import React from 'react'
import './ImagePlace.css'

function ImagePlace({ text, description, btn_text, backgroundImage }) {
    const wrapperStyle = {
        backgroundImage: `url(${backgroundImage})`,
    }
    return (
        <div className='img_container'>
            <div className='img-wrapper' style={wrapperStyle} >
                <div className='img-text'>
                    <h1>{text}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ImagePlace
