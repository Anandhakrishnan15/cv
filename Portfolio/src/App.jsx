import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
// import Hero_Intro from "./components/Hero/Hero_Intro";
import About_Me from "./pages/About/About_Me";
import Contact from "./pages/Contacts/Contact";
import Homepage from "./pages/Homepage";
// import FloatingRocket from "./components/Hero/SplineRocket";
// import FAQPage from "./pages/Projects/FAQPage";

function App() {
  return (
    <div className="overflow -x-hidden text-netural-300 antialiased selection:bg-indigo-500 selection:text-blue-100">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto ">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About_Me />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        {/* <FAQPage/> */}
      </div>
    </div>
  );
}

export default App;
