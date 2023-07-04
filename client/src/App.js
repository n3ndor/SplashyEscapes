import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import heroVideoLight from '../src/media/hero_light.mp4';
import heroVideoDark from '../src/media/hero_dark.mp4';

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
      <Hero videoSource={isDarkMode ? heroVideoDark : heroVideoLight} onToggle={handleDarkModeToggle} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
