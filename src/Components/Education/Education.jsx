import React from 'react';
import './Education.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'BIT',
    location: 'karnataka',
    duration: '2023',
    description:
      'Currently pursuing advanced education in Computer Science with a focus on Artificial Intelligence and modern computing. Achieved 80% in Quarter 1 (TypeScript) and 92% in Quarter 2 (Next.js). Currently in Quarter 3, focusing on Python and AI development.',
  },
  {
    degree: 'Intermediate in Computer Science',
    institution: 'City College',
    location: 'karnataks',
    duration: '2020 - 2022',
    description:
      'Completed intermediate education with a focus on Computer Science fundamentals, mathematics, and programming basics. Developed strong analytical and problem-solving skills.',
  },
  {
    degree: 'SSLC',
    institution: 'City School',
    location: 'Karnataka',
    duration: '2018 - 2020',
    description:
      'Completed matriculation with distinction, focusing on science subjects. Developed a strong foundation in mathematics and scientific principles.',
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-dot"></div>
            <div className="education-content">
              <h3>
                <FaGraduationCap className="edu-icon" /> {item.degree}
              </h3>
              <h4 className="institution">{item.institution}</h4>
              <p className="edu-meta">
                <span><FaCalendarAlt /> {item.duration}</span> &nbsp;
                <span><FaMapMarkerAlt /> {item.location}</span>
              </p>
              <p className="edu-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
