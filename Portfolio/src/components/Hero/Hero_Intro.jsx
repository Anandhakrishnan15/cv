import React, { Suspense } from "react";
import profileImg from "../../assets/devloper-image.webp";
import "./hero.css";
const Hero_Intro = () => {
  const SplineComponent = React.lazy(() => import("@splinetool/react-spline"));
  return (
    <div className=" heroContainer">
      {" "}
      <div className="aBoutmeHerader">
        <h1 className="bg-gradient-to-r from-blue-300  to-indigo-600 inline-block text-transparent bg-clip-text">
           All About <span>Me</span>
        </h1> 
      </div>
    
      <div className="Herowraper">
        <div className="hero-D">
          <h1 className=" selection:text-black"> Hi, I’m Anandhakrishnan</h1>
          <span className="bg-gradient-to-r from-blue-300 mt-1 to-indigo-600 inline-block text-transparent bg-clip-text">
            a Web Developer
          </span>
          <p>
            Specializing in the MERN Stack with a tagline such as Creating
            seamless, responsive web solutions for businesses and individuals.
          </p>
        </div>
        <div className="hero-Img">
          {/* <img src={profileImg} alt="profileImg" /> */}
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <SplineComponent scene="https://prod.spline.design/CUN8Y70EQc3yfGGU/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero_Intro;
