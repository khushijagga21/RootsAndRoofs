import { motion } from "framer-motion";
import "./Projects.css";

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const projects = [
  { title: "Skyline Residency", image: "https://source.unsplash.com/400x300/?house,architecture" },
  { title: "Urban Heights", image: "https://source.unsplash.com/400x300/?building,city" },
  { title: "Luxury Villas", image: "https://source.unsplash.com/400x300/?villa,interior" },
  { title: "Commercial Hub", image: "https://source.unsplash.com/400x300/?office,modern" },
];

function Projects() {
  return (
    <div className="projects-page">
      <h2>Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
