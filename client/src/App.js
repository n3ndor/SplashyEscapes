import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import heroVideoLight from '../src/media/hero_light.mp4';
import heroVideoDark from '../src/media/hero_dark.mp4';
import Navbar from './components/Navbar'
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative ${isDarkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <Navbar />
        <MainLayout videoSource={isDarkMode ? heroVideoDark : heroVideoLight} onToggle={handleDarkModeToggle} isDarkMode={isDarkMode}>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
