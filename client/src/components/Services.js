import React from 'react'

const Services = ({ isDarkMode }) => {
    return (
        <div className={`page ${isDarkMode ? 'dark' : ''}`}>
            <h2>Services</h2>
            <p>Under Construction</p>
            <p>Coming Soon!</p>
        </div>
    )
}

export default Services;