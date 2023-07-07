import React from 'react'
import jumpVideo from '../media/jump.mp4'
import holdVideo from '../media/hold.mp4'
import chillVideo from '../media/chill.mp4'

const About = ({ isDarkMode }) => {
    return (
        <div className={`page ${isDarkMode ? 'dark' : ''}`}>
            <div className="grid-container">
                <div className="grid-item full-width">
                    <video src={jumpVideo} autoPlay loop muted />
                </div>
                <div className="grid-item full-width">
                    <h2>Let's Jump In !</h2>
                </div>
                <div className="grid-item full-width">
                    <p>Text 1...</p>
                </div>
                <div className="grid-item two-thirds">
                    <video src={holdVideo} autoPlay loop muted />
                </div>
                <div className="grid-item text">
                    <p>Text 2...</p>
                </div>
                <div className="grid-item full-width">
                    <p>Text 3...</p>
                </div>
                <div className="grid-item text">
                    <video src={chillVideo} autoPlay loop muted />
                </div>
                <div className="grid-item text">
                    <p>Text 4...</p>
                </div>
                <div className="grid-item full-width">
                    <p>Text 5...</p>
                </div>
            </div>
        </div>
    )
}

export default About;
