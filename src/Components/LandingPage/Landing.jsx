import React from 'react'
import './Landing.css'
// import profile_img from '../../assets/profile_img.svg' 


const Landing = () => {
  return (
    <div className='land'>
        <img height={200} src='' alt='profile image'/>
        <h1><span>Hi I am Preetham, </span>Developer</h1>
        <p>decription</p>
        <div className="land-action">
            <div className="land-connect">Hire me</div>
            <div className='my-resume'>Download Resume</div>
        </div>
    </div>
  )
}

export default Landing