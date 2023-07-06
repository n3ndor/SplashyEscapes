import React from 'react'

const Services = ({ isDarkMode }) => {
    return (
        <div className={`page ${isDarkMode ? 'dark' : ''}`}>
            <h2>Services</h2>
        </div>
    )
}

export default Services;