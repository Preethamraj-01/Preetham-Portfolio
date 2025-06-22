import React, { useState, useEffect } from "react";
import "./Landing.css";
import profile_img from "../../assets/profile_image.svg";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";

const titles = ["Front-end Developer", "Back-end Developer", ".Net Developer"];

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="land" id="landing">
      <div className="land-left">
        <h1>
          <p className="greeting">
            Hey there!
            <span role="img" aria-label="hi" className="wave-icon">
              👋
            </span>
          </p>
          <p className="intro">I'm G R Preetham</p>
          <p className="rotating-title">{titles[index]}</p>
        </h1>
        <p className="description">
          I’m passionate about solving real-world problems and crafting
          solutions that make a meaningful impact. Thank you for exploring my
          portfolio — stay curious and keep building!🚀
        </p>

        <div className="land-action">
          <a
            href="https://drive.google.com/file/d/1vuGPYt929iPPL-_0zBLk-g3XqU1bOP5l/view"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn resume-btn"
          >
            My Resume <FiDownload />
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="glass-btn contact-btn"
          >
            Contact Me
          </Link>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          
          <a
            href="https://leetcode.com/u/Preethamraj__01/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-code"></i>
          </a>
        </div>
      </div>

      <div className="land-right">
        <img height={300} src={profile_img} alt="profile" />
      </div>
    </div>
  );
};

export default Landing;
