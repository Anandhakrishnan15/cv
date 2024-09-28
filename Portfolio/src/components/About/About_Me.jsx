import React, { Suspense, useEffect, useState } from "react";
import "./Aboutme.css"
// import profileImg from "../../assets/react.svg";
// import Spline from "@splinetool/react-spline";

const About_Me = () => {
const [showMessage,setShowMessage] = useState(false);
const [isShaking, setIsShaking] = useState(false);
  const SplineComponent = React.lazy(() => import("@splinetool/react-spline"));
 useEffect(() => {
   setTimeout(() => {
     setShowMessage(true);
     setTimeout(() => {
       setIsShaking(true);
       setTimeout(() => {
         setIsShaking(false);
         setTimeout(() => {
           setShowMessage(false);
         }, 2000); // Delay before hiding the message
       }, 500); // Duration of the shake
     }, 2000); // Delay before shaking
   }, 3000); // Adjust the delay as needed
 }, []);
 
  return (
    <div className="AboutMeContainer">
      <div className="aboutmewrapper">
        <div className="aBoutmeHerader">
          <h1 className="bg-gradient-to-r from-blue-300  to-indigo-600 inline-block text-transparent bg-clip-text">
            About <span>Me</span>
          </h1>
        </div>
        <div className="aboutmeD">
          <div className="aboutmeDImg">
            <div className={`glassCloud  ${showMessage? 'opacity-100 transition-opacity duration-700 ': ''}${isShaking? 'shake':''}`}>
             <span>{`Hi'm mini robot I follow your mouse`}</span> 
            </div>

            <Suspense fallback={<div className="loader">Loading...</div>}>
              <SplineComponent scene="https://prod.spline.design/CUN8Y70EQc3yfGGU/scene.splinecode" />
            </Suspense>
            {/* <div className="loader">Loading...</div> */}
          </div>
          <div className="aboutMeDiscription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            quasi rem illum numquam autem rerum, explicabo voluptatem, odio
            nesciunt ipsum eos repudiandae minus mollitia sint sit maiores quae
            cupiditate reiciendis! Reiciendis enim dolores debitis pariatur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at
            nesciunt sed accusamus consequuntur aspernatur eos? Commodi dolores
            officia dignissimos voluptatem modi delectus expedita, adipisci odio
            numquam, amet doloremque est.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Me;
