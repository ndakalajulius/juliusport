import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef(); // Create a ref for the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure the form is correctly referenced
    if (form.current) {
      // Send the form data using EmailJS
      emailjs
        .sendForm(
          "service_97", // Replace with your Service ID
          "template_eul5w5g", // Replace with your Template ID
          form.current, // Pass the actual form element here
          "kDhACZjrSdA7cFpRU" // Replace with your User ID
        )
        .then(
          (result) => {
            console.log("Message sent successfully", result);
            alert("Message sent successfully!");

            // Reset the form data state
            setFormData({
              name: "",
              email: "",
              message: "",
            });

            // Reset the form fields using the form reference
            form.current.reset();
          },
          (error) => {
            console.log("Error in sending message", error);
            alert("An error occurred, please try again.");
          }
        );
    } else {
      console.error("Form reference is not available");
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
