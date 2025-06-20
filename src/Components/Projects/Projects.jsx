import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arro_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={ theme_pattern}></img>
        </div>
        <div className="projects-container">
        {Services_Data.map((service,index)=>{
            return <div key={index} className='projects-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='projects-readmore'>
                    <p>Read More</p>
                    <img src={arro_icon}></img>
                    </div>

            </div>
        })}
        </div>

    </div>
  )
}

export default Projects
