import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h3 className="contact-subtitle">CONTACT</h3>
        <h1 className="contact-title">
          Want to join the Rooftop Club and access the most exclusive off-market solutions?
        </h1>
        <form className="contact-form">
          <div className="input-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Company" />
            <select>
              <option>Nation</option>
              <option>India</option>
              <option>USA</option>
              <option>Italy</option>
            </select>
          </div>
          <textarea placeholder="Message" rows="4" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
