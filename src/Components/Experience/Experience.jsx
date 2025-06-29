import './Experience.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';

const educationData = [
  {
    company: "West Pharmaceuticals",
    location: 'karnataka',
    duration: '2023',
    percentage:'8.71(cgpa)',
    description:
      'Completed Bachelor of Engineering in Computer Science and Engineering in 2023 with a CGPA of 8.71 and no backlogs, with a strong focus on Computer Science fundamentals, mathematics, and programming.',
  },
  {
    company: 'West Pharmaceuticals',
    location: 'karnataka',
    duration: '2017 - 2019',
    percentage:'93',

    description:
      'Completed Pre-University (PU) in 2019 with a PCMB course, focusing primarily on Mathematics, and achieved a percentage of 93%, along with a KCET rank of 3400.',
  },
  
];

const Experience = () => {
  return (
    <section className="education-section" id="experience">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-dot"></div>
            <div className="education-content">
              <h3>
                <FaLaptopCode   className="edu-icon" /> {item.company}
              </h3>
              <h4 className="institution">{item.institution}</h4>
              <p className="edu-meta">
                <span><FaCalendarAlt /> {item.duration}</span> &nbsp;
                <span><FaMapMarkerAlt /> {item.location}</span> &nbsp;&nbsp;
              </p>
              <p className="edu-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
