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
          <p className="greeting">Hey there!</p>
          <p className="intro">I'm Preetham</p>
          <p className="rotating-title">{titles[index]}</p>
        </h1>
        <p className="description">
          I build robust full-stack web applications with modern technologies
          and performance in mind.
        </p>
        <div className="land-action">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="land-connect"
          >
            Hire Me
          </Link>

          <a
            href="https://drive.google.com/file/d/1vuGPYt929iPPL-_0zBLk-g3XqU1bOP5l/view"
            target="_blank"
            rel="noopener noreferrer"
            className="my-resume"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            My Resume
            <FiDownload />
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
