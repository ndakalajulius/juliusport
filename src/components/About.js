import React from "react";
import "./../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Julius, a passionate developer with a knack for crafting scalable
          web applications. My expertise lies in React, Node.js, and mobile app
          development. I love tackling challenges and bringing ideas to life.
        </p>
      </div>
      <div className="about-image">
        <img src="https://via.placeholder.com/300" alt="Profile" />
      </div>
    </section>
  );
};

export default About;
