import React from "react";
import "./../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4" placeholder="Enter your message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
