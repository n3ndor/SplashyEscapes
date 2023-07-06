import React, { useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import heroVideoLight from '../media/hero_light.mp4';
import heroVideoDark from '../media/hero_dark.mp4';

const Home = ({ isDarkMode }) => {
    const text = 'Splashy Escapes';
    const videoSource = isDarkMode ? heroVideoDark : heroVideoLight;

    useEffect(() => {
        const h2 = document.querySelector('.animate-text');
        h2.classList.remove('animated');
        void h2.offsetWidth;
        h2.classList.add('animated');
    }, []);

    const transitions = useTransition(text.split(''), {
        from: { opacity: 0, transform: 'translateY(100%)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
        trail: 200, // Delay time between each letter
    });

    return (
        <div className="hero">
            <div className="video-container">
                <video src={videoSource} autoPlay muted loop playsInline />
                <h2 className="animate-text animated">
                    {transitions((style, letter) => (
                        <animated.span style={style}>{letter}</animated.span>
                    ))}
                </h2>
            </div>
        </div>
    );
};

export default Home;
