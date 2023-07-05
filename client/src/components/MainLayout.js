import React from 'react';
import DarkModeToggleComponent from './DarkModeToggle';
import '../App.css';

const MainLayout = ({ videoSource, onToggle, isDarkMode, children }) => {
    return (
        <div className="hero">
            <div className="video-container">
                <video src={videoSource} autoPlay muted loop playsInline />
                <div className="toggle-container">
                    <DarkModeToggleComponent onToggle={onToggle} isDarkMode={isDarkMode} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
