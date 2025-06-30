import './Experience.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';

const educationData = [
  {
    role:"Associate Software Engineer",
    company: "West Pharmaceuticals",
    location: 'Bangalore, Karnataka',
    duration: 'May 2024 - Present',
    designation:'Full-time',
    description:
      'Gained hands-on experience in developing and maintaining applications using .NET MAUI, React JS for front-end development, MS SQL for database management, and C# for backend logic, along with Microsoft Azure for cloud deployment and DevOps operations.',
  },
  {
    role:"Graduate Software Trainee",
    company: 'West Pharmaceuticals',
    location: 'Bangalore, Karnataka',
    duration: 'July 2023 - April 2024. 10 mos',
    designation:'Internship',
    description:'Gaining practical experience during an internship in full-stack development using ASP.NET Web Forms, RESTful APIs, .NET MAUI, Java, C#, HTML, CSS, and JavaScript, with exposure to both client-side UI design and server-side logic.',
  },    
  
];

const Experience = () => {
  return (
    <section className="education-section" id="experience">
      <h2 className="education-title">Work Experience</h2>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-dot"></div>
            <div className="education-content">
              <h3>
                <FaLaptopCode   className="edu-icon" /> {item.role}
              </h3>
              <p>{item.company}.  {item.designation}</p>
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
