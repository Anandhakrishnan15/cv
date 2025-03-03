import { motion } from "framer-motion";
import "./Aboutme.css";
import SocialIcons from "../../components/SocialIcons";
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
    "Building my personal portfolio website to showcase my work and projects, along with a review system where clients can share feedback on my work.",
    "Working on 'Saiego,' a sister company of Girish Ego, focused on developing a cutting-edge webpage for seamless digital solutions.",
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
    <motion.div
      className="about-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      {/* Introduction */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="about-title">About Me</h1>
        <p className="about-text">{aboutMeData.introduction}</p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading">What I Do</h2>
        <div className="skills-container">
          {aboutMeData.skills.map((skill, index) => {
            const [title, description] = skill.split(":");
            return (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="skill-title">{title.trim()}</h3>
                <p className="skill-description">{description.trim()}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading">Experience & Achievements</h2>
        <div className="skills-container">
          {aboutMeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-text">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading">Current Projects</h2>
        <ul className="about-list">
          {aboutMeData.currentProjects.map((project, index) => (
            <motion.li
              key={index}
              className="list-item"
              whileHover={{ scale: 1.05 }}
            >
              <pre className="details">{project}</pre>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Why Work With Me */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading">Why Work With Me?</h2>
        <ul className="about-list">
          {aboutMeData.whyWorkWithMe.map((reason, index) => (
            <motion.li
              key={index}
              className="list-item"
              whileHover={{ scale: 1.05 }}
            >
              <pre className="details">{reason}</pre>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="about-content contact-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading">Let’s Connect!</h2>
        <p className="about-text">{aboutMeData.contactCTA}</p>
        <SocialIcons/>
        {/* <div className="social-buttons">
          <motion.a
            href="mailto:your.email@example.com"
            className="social-btn"
            whileHover={{ scale: 1.1 }}
          >
            📩 Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            className="social-btn"
            whileHover={{ scale: 1.1 }}
          >
            🔗 LinkedIn
          </motion.a>
          <motion.a
            href="https://wa.me/yourwhatsappnumber"
            className="social-btn"
            whileHover={{ scale: 1.1 }}
          >
            💬 WhatsApp
          </motion.a>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;

