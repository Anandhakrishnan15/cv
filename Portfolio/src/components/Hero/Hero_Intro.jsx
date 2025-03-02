import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./HeroSection.css";
import TypingText from "../TypingText";

const SplineComponent = React.lazy(() => import("@splinetool/react-spline"));

const HeroSection = () => {

  return (
    <motion.section
      className="Herowraper relative overflow-hidden flex flex-col md:flex-row items-center justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-D text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <br />
          Anandhakrishnan{" "}
        </h1>
        <TypingText
          texts={[
            "Transforming ideas into high-performance web solutions.",
            "Building modern, scalable, and responsive web applications.",
            "Crafting seamless digital experiences with the latest technologies.",
            "Creating web solutions that drive success and innovation.",
          ]}
          typingSpeed={120}
          deletingSpeed={60}
          pauseTime={2500}
        />

        <p className="text-lg md:text-xl mt-4 max-w-lg">
          Creating seamless, responsive web solutions for businesses and
          individuals.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6" style={{marginTop:'30px', marginBottom:'30px'}}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-blue-500 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            🚀 View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-gray-800 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            📩 Contact Me
          </Link>
        </div>
      </div>
      {/* Spline 3D Model */}
      <div className="hero-Img w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          }
        >
          <SplineComponent scene="https://prod.spline.design/CUN8Y70EQc3yfGGU/scene.splinecode" />
        </Suspense>
      </div>
    </motion.section>
  );
};

export default HeroSection;
