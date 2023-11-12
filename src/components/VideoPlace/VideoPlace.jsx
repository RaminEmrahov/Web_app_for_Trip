import React from 'react'
import './VideoPlace.css'

function VideoPlace({ text, description, btnText, btnClassName, children }) {
    return (
        <div className='video-text'>
            <h1>{text}</h1>
            <p>{description}</p>
            <button className={btnClassName}>{btnText}</button>
            <div>{children}</div>
        </div>
    )
}

export default VideoPlace