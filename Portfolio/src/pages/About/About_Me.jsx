const aboutMeData = {
  introduction:
    "Hello! I'm a MERN Stack Developer with over 1 year of experience in web development. I specialize in creating dynamic and responsive web applications using React.js, Node.js, MongoDB, Express.js, JavaScript, and SQL. With a passion for clean code and seamless user experiences, I have worked on multiple freelancing projects, web applications, and advertisements that deliver high performance and scalability.",
  skills: [
    "Frontend Development: Building interactive and modern UIs using React.js.",
    "Backend Development: Creating efficient and scalable APIs using Node.js and Express.js.",
    "Database Management: Working with MongoDB and SQL for data storage and optimization.",
    "Real-Time Features: Implementing real-time notifications and chat functionalities using Socket.IO.",
    "Performance Optimization: Ensuring smooth and fast-loading applications.",
  ],
  experience: [
    {
      title: "Internship at Quality Zone Infotech",
      description:
        "Gained hands-on experience in building and optimizing web applications, improving my proficiency in the MERN stack.",
    },
    {
      title: "Freelance Projects",
      description:
        "Completed various freelance projects, including web page redesign, responsive UI improvements, and custom feature implementations.",
    },
    {
      title: "Work at CFC Company",
      description:
        "Contributing to innovative web solutions and application development.",
    },
  ],
  currentProjects: [
    "Developing an Image Storage & Management Platform (similar to Cloudinary), integrating cloud-based storage solutions.",
    "Building my personal portfolio website to showcase my work and projects.",
    "Running a pencil sketching channel, focusing on 'copy-paste art'.",
  ],
  whyWorkWithMe: [
    "Problem-Solving Mindset: Finding the best solutions for complex web challenges.",
    "Attention to Detail: Ensuring a smooth user experience with optimized performance.",
    "Continuous Learning: Staying updated with the latest industry trends and technologies.",
  ],
  personalTouch:
    "Outside of coding, I have a keen interest in pencil sketching, and I am working on creating my own car freshener brand. I love blending creativity with technology to develop unique and engaging projects.",
  contactCTA:
    "Looking for a skilled MERN Stack Developer for your project? Feel free to reach out!",
};

const AboutMe = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-6">{aboutMeData.introduction}</p>

      <h2 className="text-2xl font-semibold mt-6">What I Do</h2>
      <ul className="list-disc pl-5 mb-6">
        {aboutMeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Experience & Achievements</h2>
      {aboutMeData.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2 className="text-2xl font-semibold mt-6">Current Projects</h2>
      <ul className="list-disc pl-5 mb-6">
        {aboutMeData.currentProjects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Why Work With Me?</h2>
      <ul className="list-disc pl-5 mb-6">
        {aboutMeData.whyWorkWithMe.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">A Little More About Me</h2>
      <p className="mb-6">{aboutMeData.personalTouch}</p>

      <h2 className="text-2xl font-semibold mt-6">Let’s Connect!</h2>
      <p className="mb-6">{aboutMeData.contactCTA}</p>
    </div>
  );
};

export default AboutMe;

// import React from "react";
// import "./Aboutme.css"
// import { CARDS_DETAILS } from "../../constants";
// const About_Me = () => {
//   return (
//     <div className="all-about-meCard">
//       <div className="AboutMeCards-containers">
//         <div className="AboutMeCardsHolders">
//           {CARDS_DETAILS.map((CD, CDi) => (
//             <div className="cards" key={CDi}>
//               <h1>{CD.heading}</h1>
//               <div className="cardsImg">
//                 <img src={CD.Image} alt={CD.Image} />
//               </div>
//               <div className="cardsInfo">{CD.details}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About_Me;
