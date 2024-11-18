import React from "react";
import "./../styles/Projects.css";

function Projects() {
  const projects = [
    { title: "E-commerce App", description: "A React and Node.js powered store.", link: "#" },
    { title: "Portfolio Website", description: "My personal portfolio built with React.", link: "#" },
    { title: "Blog App", description: "A full-stack blog application with user authentication.", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
