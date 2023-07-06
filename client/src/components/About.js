import React from 'react'

const About = ({ isDarkMode }) => {
    return (
        <div className={`page ${isDarkMode ? 'dark' : ''}`}>
            <h2>About</h2>
        </div>
    )
}

export default About;