import { useState, useEffect } from "react";
import HomePage from "./Homepage"; // Replace with your actual home component
import "../App.css"; // Import the CSS file

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500); // Show for 2.5 seconds
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <HomePage />
      )}
    </>
  );
};

export default LoadingScreen;
