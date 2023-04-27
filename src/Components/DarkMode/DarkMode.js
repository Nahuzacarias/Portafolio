import "./DarkMode.css";
import React, { useState, useEffect } from 'react';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
     
      <label className="switch" >
      <input type="checkbox" id="mode-switch"  />
      <span className="slider round" onClick={handleDarkModeToggle}></span>
      
    </label>
    
  );
}

export default DarkMode;
