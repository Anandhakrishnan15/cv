import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Hero_Intro from "./components/Hero/Hero_Intro";

function App() {
  return (
    <div className="overflow -x-hidden text-netural-300 antialiased selection:bg-indigo-200 selection:text-blue-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Nav />
        <Hero_Intro />
        <Hero_Intro />

        <Hero_Intro />

        
      </div>
    </div>
  );
}

export default App;
