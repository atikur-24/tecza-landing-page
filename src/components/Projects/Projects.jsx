import React from "react";
import { FaEye, FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import projectsData from "../../../public/data/projects";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <SectionTitle
        title="Our Projects"
        description="We have a diverse range of clients, including startups, small businesses, and large enterprises. We have a diverse range of clients, including startups."
      />
      <div className="container">
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="icon-container">
                    <p className="project-icon">
                      <FaSearchPlus />
                    </p>
                    <a href={project.link} className="project-icon">
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="project-btn">
          <Link to="/projects">
            <Button>More Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
