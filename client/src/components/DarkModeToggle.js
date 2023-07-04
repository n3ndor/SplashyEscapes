import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const DarkModeToggleComponent = ({ onToggle, isDarkMode }) => {

    return (
        <div className="absolute top-4 right-4 z-10">
            <DarkModeToggle
                onChange={onToggle}
                checked={isDarkMode}
                size={60}
            />
        </div>
    );
};

export default DarkModeToggleComponent;
