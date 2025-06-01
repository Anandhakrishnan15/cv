import HeroSection from "../components/Hero/Hero_Intro";
import AboutMeHome from "./About/AboutMeHome";
import Skills from "./skills/Skills";
import CursoeSkilss from "./skills/CursoeSkilss";
import FeaturedProjects from "./Projects/FeaturedProjects";
import ContactMe from "./Contacts/ContactMe";
import { Timeline } from "../components/Timeline";
import { mockData } from "../constants/mockData";

// const mockData = [
//   {
//     title: "Started My Journey",
//     content: (
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base">
//         In 2022, I began exploring web development, focusing on the MERN stack
//         and building basic web applications.
//       </p>
//     ),
//   },
//   {
//     title: "Freelance Projects",
//     content: (
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base">
//         Completed several freelance projects including portfolios, business
//         websites, and admin dashboards.
//       </p>
//     ),
//   },
//   {
//     title: "Joined Quality Zone Infotech",
//     content: (
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base">
//         Worked as a full-stack developer, gaining hands-on experience with live
//         client projects and SEO.
//       </p>
//     ),
//   },
//   {
//     title: "Launching Saiego",
//     content: (
//       <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base">
//         Started working on my own product-focused company for B2B heating
//         solutions with a fully custom React website.
//       </p>
//     ),
//   },
// ];

const Homepage = () => {
  return (
    <div className="bg-transparent text-white space-y-20">
      <HeroSection />
      <AboutMeHome />
      <Skills />
      <CursoeSkilss />
      <FeaturedProjects />
      <ContactMe />
      <Timeline data={mockData} />
    </div>
  );
};

export default Homepage;
