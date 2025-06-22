import React, { useState } from "react";
import "./NavBar.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";

export const NavBar = ({ toggleTheme, currentTheme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverBg = currentTheme === "light" ? "#f0f0f0" : "#333";
  const iconColor = currentTheme === "light" ? "black" : "white";
  return (
    <div className="navbar">
      <p>
        G R <br />
        Portfolio
      </p>
      <div className="nav-right">
        <ul className="nav-menu">
          <li>
            <Link to="landing" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>Experince</li>
          <li> <Link to="education" smooth={true} duration={500}>
              Education
            </Link></li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hire-me-dance "
            >
              Hire Me
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              color: iconColor,
              background: isHovered ? hoverBg : "transparent",
              border: "none",
              borderRadius: "50%",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            {currentTheme === "light" ? (
              <FiSun size={20} />
            ) : (
              <FiMoon size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
