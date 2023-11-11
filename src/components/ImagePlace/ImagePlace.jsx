import React from 'react'
import './ImagePlace.css'

function ImagePlace({text,description}) {
    return (
        <div className='img_container'>
        <div className='img-wrapper'>
        <div className='img-text'>
            <h1>{text}</h1>
            <p>{description}</p>
        </div>
        </div>
        </div>
    )
}

export default ImagePlace