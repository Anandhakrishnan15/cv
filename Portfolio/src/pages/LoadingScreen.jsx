import { useState, useEffect } from "react";
import HomePage from "./Homepage"; // Import the actual homepage component
import "../App.css"; // Import the CSS file

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // Show for 2.5 seconds
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return isLoading ? (
    <div className="loading-screen">
      <div className="loader"></div>
    </div>
  ) : (
    <HomePage />
  );
};

export default LoadingScreen;
