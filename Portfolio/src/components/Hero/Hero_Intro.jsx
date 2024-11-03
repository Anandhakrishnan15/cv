import profileImg from "../../assets/devloper-image.webp";
import "./hero.css";
const Hero_Intro = () => {
  return (
    <div className=" heroContainer">
      <div className="Herowraper">
        <div className="hero-D">
          <h1 className=" selection:text-black"> Hi, I’m Anandhakrishnan</h1>
          <span className="bg-gradient-to-r from-blue-300 mt-10 to-indigo-600 inline-block text-transparent bg-clip-text">
            a Web Developer
          </span>
          <p>
            Specializing in the MERN Stack with a tagline such as Creating
            seamless, responsive web solutions for businesses and individuals.
          </p>
        </div>
        <div className="hero-Img">
          <img src={profileImg} alt="profileImg" />
        </div>
      </div>
    </div>
  );
}

export default Hero_Intro
