import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/LandingPage/Landing";
import { About } from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const firstRender = useRef(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
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

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router >
      <div className="pages">
      <NavBar toggleTheme={toggleTheme} currentTheme={theme} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <About />
              <Experience/>
              <Education/>
              <Projects />
              <Contact />
            </>
          }
        />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
