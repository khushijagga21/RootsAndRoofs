import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Crafting Spaces, Creating Legacies</h1>
          <p>Where Dreams Meet Foundations.</p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <motion.div
          className="about-text"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Who We Are</h2>
          <p>
            Roots and Roofs is not just about building spaces; it's about building trust.
            With decades of expertise in crafting premium living spaces,
            we bring architectural innovation with modern living concepts to life.
          </p>
        </motion.div>
        <motion.div
          className="about-img"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src="https://th.bing.com/th/id/OIP.37DdUk86ZA2M1AuecJPxFQHaHa?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="About us" />
        </motion.div>
      </div>

      {/* Vision/Promise Section */}
      <div className="about-promise">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Promise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Sustainable design, customer-first approach, and delivering more than just concrete structures — we create living stories.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
