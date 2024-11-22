import React from "react";
import "./../styles/Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "E-commerce Platform",
      description: "A full-stack application with cart and checkout features.",
      link: "#",
    },
    {
      title: "React Native App",
      description: "A mobile app built with Expo for seamless user experience.",
      link: "#",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="button">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
