import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarPosition, setNavbarPosition] = useState('hidden');
    const lastScrollTop = useRef(0);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            clearTimeout(scrollTimeout.current);
            let st = window.scrollY || document.documentElement.scrollTop;
            if (e.deltaY > 0) {
                // down scroll code
                setNavbarPosition('bottom');
            } else {
                // up scroll code
                setNavbarPosition('top');
            }
            lastScrollTop.current = st <= 0 ? 0 : st;

            // Hide navbar if no further scrolling after 1 second
            scrollTimeout.current = setTimeout(() => {
                setNavbarPosition('hidden');
            }, 2000);
        };

        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <div className={`navbar ${navbarPosition}`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;