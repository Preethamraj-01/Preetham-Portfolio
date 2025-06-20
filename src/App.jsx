import React, { useState, useEffect ,useRef } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Landing from './Components/LandingPage/Landing'
import './App.css'; 
import { About } from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

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
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;