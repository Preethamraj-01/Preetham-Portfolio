import React from "react";
import "./About.css";

const skillsData = [
  { name: "HTML/CSS", level: 95 },
  { name: "Java", level: 85 },
  { name: ".NET", level: 85 },
  { name: "Rest API", level: 70 },
  { name: "Express", level: 85 },
  { name: "SQL Server", level: 75 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Python", level: 75 },
  { name: ".Net MAUI", level: 80 },
  { name: "Azure Devops", level: 90 },
];

export const About = () => {
  const firstColumn = skillsData.slice(0, 6);
  const secondColumn = skillsData.slice(6);
  return (
    <div className="skills-section" id="about">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          {firstColumn.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-column">
          {secondColumn.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};
