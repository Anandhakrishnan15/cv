import React, { Suspense, memo } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import TypingText from "../TypingText";
import "./HeroSection.css";

const SplineComponent = React.lazy(() => import("@splinetool/react-spline"));

const HeroSection = () => {
  return (
    <motion.section
      className="Herowraper relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }} // cubic-bezier for smooth ease
    >
      {/* Text Content - SEO Optimized */}
      <header className="hero-D w-full md:w-1/2 text-left space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Anandha Krishnan
          </span>
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
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          Creating seamless, responsive web solutions for businesses and
          individuals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4 mt-6">
          <NavLink
            to="/projects"
            className="bg-blue-500 text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
          >
            🚀 View My Work
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-gray-800 text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center"
          >
            📩 Contact Me
          </NavLink>
        </div>
      </header>

      {/* 3D Model - Lazy Loaded */}
      <article className="hero-Img w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:mt-0">
        <Suspense
          fallback={
            <div className="animate-spin w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full"></div>
          }
        >
          <SplineComponent scene="https://prod.spline.design/CUN8Y70EQc3yfGGU/scene.splinecode" />
        </Suspense>
      </article>
    </motion.section>
  );
};

export default memo(HeroSection);
