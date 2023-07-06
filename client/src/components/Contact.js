import React from 'react'
import heroVideoLight from '../media/hero_light.mp4';
import heroVideoDark from '../media/hero_dark.mp4';

const Contact = ({ isDarkMode }) => {
    const videoSource = isDarkMode ? heroVideoDark : heroVideoLight;

    return (
        <div className={`contact ${isDarkMode ? 'dark' : ''}`}>
            <video src={videoSource} autoPlay muted loop playsInline className="video-background" />
            <div className="content">
                <h2>Contact: </h2>
            </div>
        </div>
    )
}

export default Contact
