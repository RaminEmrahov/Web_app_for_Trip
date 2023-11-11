import React from 'react'
import './VideoPlace.css'

function VideoPlace({ text, description, children }) {
    return (
        <div className='video-text'>
            <h1>{text}</h1>
            <p>{description}</p>
            <div>{children}</div>
        </div>
    )
}

export default VideoPlace