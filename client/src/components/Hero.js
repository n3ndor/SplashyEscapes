import React, { useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import DarkModeToggleComponent from './DarkModeToggle';
import '../App.css';

const Hero = ({ videoSource, onToggle, isDarkMode }) => {
    const text = 'Splashy Escapes';

    useEffect(() => {

        const h2 = document.querySelector('.animate-text');
        h2.classList.remove('animated');
        void h2.offsetWidth;
        h2.classList.add('animated');
    }, [isDarkMode]);

    const transitions = useTransition(text.split(''), {
        from: { opacity: 0, transform: 'translateY(100%)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
        trail: 100, // Delay time between each letter
    });

    return (
        <div className="hero">
            <div className="video-container">
                <video src={videoSource} autoPlay muted loop playsInline />
                <div className="toggle-container">
                    <DarkModeToggleComponent onToggle={onToggle} isDarkMode={isDarkMode} />
                </div>
                <h2 className="animate-text animated">
                    {transitions((style, letter) => (
                        <animated.span style={style}>{letter}</animated.span>
                    ))}
                </h2>
            </div>
        </div>
    );
};

export default Hero;
