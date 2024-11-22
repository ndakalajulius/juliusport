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
      title: "Events Hub kenya",
      description: "Events Hub kenya is a web app where one may add his or her event and also view other events that are happening in the country.",
      link: "https://events-hub-kenya.vercel.app/",
    },
    {
      title: "Vedman Capital Limited",
      description: "The firm primarily advices clients on investments in the capital markets and where an agreement exits with a client, manage a portfolio of investments for the purpose of investment.",
      link: "https://vedmangroup.com/",
    },
    {
      title: "Book Review App",
      description: "Welcome to Briew.com. We love to learn about the world through books. See a book you like, leave a review. If you don't see a book you like, feel free to upload it and leave a review for future readers! Happy Reading!!",
      link: "https://merry-blini-2e67bf.netlify.app/",
    },
    {
      title: "HOMEDECOR",
      description: "Website for real Estate!",
      link: "https://real-estate-website-one-kappa.vercel.app/",
    },
    
    {
      title: "spring-field-eye",
      description: "eye-care-system!",
      link: "https://spring-field-eye-care-system.vercel.app//",
    },
    {
      title: "SMART | VIEW",
      description: "Property management website!",
      link: "https://property-management-website-coral.vercel.app/",
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
