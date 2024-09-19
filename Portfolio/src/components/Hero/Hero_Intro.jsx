import React from 'react'
import profileImg from "../../assets/react.svg"
import "./hero.css";


const Hero_Intro = () => {
  return (
    <div className=' heroContainer'>
      <div className="Herowraper">
        <div className="hero-D">
          <h1>Anandhakrishnan</h1>
          <span className=' bg-gradient-to-r from-blue-300  to-indigo-600 inline-block text-transparent bg-clip-text' >web developer</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quidem illo impedit aperiam consequuntur doloremque laboriosam quod, et necessitatibus minus, libero dolorem numquam suscipit consectetur dignissimos modi rerum molestias fugiat!</p>
        </div>
        <div className="hero-Img">
          <img src={profileImg} alt="profileImg" />
        </div>
      </div>
      
    </div>
  )
}

export default Hero_Intro
