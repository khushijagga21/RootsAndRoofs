import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Building Dreams, Shaping Reality</h1>
          <p>Your trusted partner in real estate development.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            onClick={() => navigate("/projects")}
          >
            Explore Projects
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={heroImage} alt="Dream Building" />
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/house.png" alt="Residential" />
            <h3>Residential Construction</h3>
            <p>Custom-built homes designed to match your vision and lifestyle.</p>
          </div>
          <div className="service-card">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/commercial.png" alt="Commercial" />
            <h3>Commercial Projects</h3>
            <p>Innovative and scalable solutions for modern commercial spaces.</p>
          </div>
          <div className="service-card">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/interior.png" alt="Interior" />
            <h3>Interior Design</h3>
            <p>Elegant interiors crafted for comfort, function, and beauty.</p>
          </div>
          <div className="service-card">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/planner.png" alt="Management" />
            <h3>Project Management</h3>
            <p>On-time and on-budget project execution from start to finish.</p>
          </div>
        </div>
      </div>

    
      </div>
   
  );
}

export default Home
