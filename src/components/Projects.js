import React from "react";
import "./../styles/Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Riziki Fondation",
      description: "Platform for helping the vulnerable in the society.",
      link: "https://rizikifoundation.net/",
    },
    {
      title: "Ohanafamilywear",
      description: "A full-stack application with cart and checkout features.",
      link: "https://ohanafamilywear.com/",
    },
    {
      title: "React Native App",
      description: "A mobile app built with Expo for seamless user experience.",
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack application with cart and checkout features.",
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack application with cart and checkout features.",
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
