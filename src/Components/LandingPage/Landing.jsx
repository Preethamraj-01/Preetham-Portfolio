import React, { useState, useEffect } from "react";
import "./Landing.css";
import profile_img from "../../assets/profile_image.svg";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";
import AIChat from "../AIChat/AIChat";
import { FaRobot } from "react-icons/fa";

const titles = [ "Java Developer",".Net Developer","React JS", "Back-end Developer"];

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [aiChatOpen, setAiChatOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1000); // change every 2s
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
          <p className="intro">I'm <span className="my-name">G R Preetham</span></p>
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
            className="git-hub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          
          <a
            href="https://leetcode.com/u/Preethamraj__01/"
            target="_blank"
            rel="noreferrer"
            className="leetcode"
          >
            <i className="fa-solid fa-code"></i>
          </a>
        </div>
      </div>

      <div className="land-right">
        <img height={300} src={profile_img} alt="profile" />
      </div>

      <button 
        className="ai-chat-btn"
        onClick={() => setAiChatOpen(!aiChatOpen)}
        title="Ask AI Assistant"
      >
        <FaRobot />
      </button>

      <AIChat isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} resumeUrl={"https://drive.google.com/file/d/1vuGPYt929iPPL-_0zBLk-g3XqU1bOP5l/view"} />
    </div>
  );
};

export default Landing;
