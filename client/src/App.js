import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import DarkModeToggleComponent from './components/DarkModeToggle';

const App = () => {
  const localDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
  const [isDarkMode, setIsDarkMode] = useState(localDarkMode || false);

  useEffect(() => {
    // Save mode to localStorage whenever it changes
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    // Apply class to body
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <Navbar />
        <DarkModeToggleComponent onToggle={handleDarkModeToggle} isDarkMode={isDarkMode} />
        <Routes>
          <Route key={isDarkMode} path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route key={isDarkMode} path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route key={isDarkMode} path="/services" element={<Services isDarkMode={isDarkMode} />} />
          <Route key={isDarkMode} path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
