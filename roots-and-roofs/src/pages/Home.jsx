import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Building Dreams, Shaping Reality</h1>
        <p>Your trusted partner in real estate development.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Explore Projects
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home;
