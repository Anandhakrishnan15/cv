import HeroSection from "../components/Hero/Hero_Intro";
import AboutMeHome from "./About/AboutMeHome";
import Skills from "./skills/Skills";
import CursoeSkilss from "./skills/CursoeSkilss";
import FeaturedProjects from "./Projects/FeaturedProjects";
import ContactMe from "./Contacts/ContactMe";

const Homepage = () => {
  return (
    <div className="bg-transparent text-white space-y-20">
      <HeroSection />
      <AboutMeHome />
      <Skills />
      <CursoeSkilss />
      <FeaturedProjects />
      <ContactMe />
    </div>
  );
};

export default Homepage;
