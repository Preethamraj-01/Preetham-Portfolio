import React from 'react';
import './Education.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap,FaPercentage  } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Bangalore Institute Of Technology(BIT)',
    location: 'karnataka',
    duration: '2023',
    percentage:'8.71(cgpa)',
    description:
      'Completed Bachelor of Engineering in Computer Science and Engineering in 2023 with a CGPA of 8.71 and no backlogs, with a strong focus on Computer Science fundamentals, mathematics, and programming.',
  },
  {
    degree: ' Pre-University Course (PUC)',
    institution: 'Vidyanidhi PU College',
    location: 'karnataka',
    duration: '2017 - 2019',
    percentage:'93',

    description:
      'Completed Pre-University (PU) in 2019 with a PCMB course, focusing primarily on Mathematics, and achieved a percentage of 93%, along with a KCET rank of 3400.',
  },
  {
    degree: 'SSLC',
    institution: 'ST Marys School',
    location: 'Karnataka',
    duration: '2016 - 2017',
    percentage:'10(cgpa)',

    description:
      'Completed SSLC in 2017 under the CBSE board with a perfect grade point of 10 out of 10.',
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
                <span><FaMapMarkerAlt /> {item.location}</span> &nbsp;&nbsp;
                <span className='percentage'><FaPercentage /> {item.percentage }</span>
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
