
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Hero_Intro from "./components/Hero/Hero_Intro";
import About_Me from "./components/About/About_Me";

function App() {
  return (
    <div className="overflow -x-hidden text-netural-300 antialiased selection:bg-indigo-500 selection:text-blue-100">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Nav />
        <Hero_Intro />
        <About_Me/>
       
      </div>
    </div>
  );
}

export default App;
