import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-heading"
      >
        Get in Touch
      </motion.h1>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="form-group">
          <input type="text" required />
          <label>Name</label>
        </div>

        <div className="form-group">
          <input type="email" required />
          <label>Email</label>
        </div>

        <div className="form-group">
          <textarea required rows="5"></textarea>
          <label>Message</label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="submit-btn"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
