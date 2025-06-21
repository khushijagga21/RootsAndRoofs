import { motion } from "framer-motion";
import "./Services.css";

const pageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const services = [
  { title: "Residential Projects", desc: "Luxurious apartments and villas designed for a modern lifestyle." },
  { title: "Commercial Spaces", desc: "Smart workspaces tailored for productivity and growth." },
  { title: "Interior Design", desc: "Bespoke interior solutions to bring elegance to every corner." },
  { title: "Renovation Services", desc: "Transform your old spaces into modern masterpieces." },
];

function Services() {
  return (
    <motion.div className="services-page" variants={pageVariants} initial="hidden" animate="visible">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
