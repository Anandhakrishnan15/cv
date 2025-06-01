import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const handleUpload = () => {
    console.log("Upload button clicked");
    // Add your file upload logic here
  };

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your Space <br />
          with AI-Powered Design
        </h1>
        <p className="hero-subtitle">
          Upload an image of your wall or ceiling and let AI do the magic!
        </p>
        <button className="hero-btn" onClick={handleUpload}>
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
