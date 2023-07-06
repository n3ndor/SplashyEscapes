import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const DarkModeToggleComponent = ({ onToggle, isDarkMode }) => {

    return (
        <div className=" toggle-container">
            <DarkModeToggle
                onChange={onToggle}
                checked={isDarkMode}
                size={60}
            />
        </div>
    );
};

export default DarkModeToggleComponent;