import React, { useState, useEffect ,useRef } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Landing from './Components/LandingPage/Landing'
import './App.css'; 
import { About } from './Components/About/About';

const App = () => {

 const [theme, setTheme] = useState('dark');
 const firstRender = useRef(true);

useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <NavBar toggleTheme={toggleTheme} currentTheme={theme} />
      <Landing />
      <About/>
    </div>
  );
};

export default App;