import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-container">
      <section id="projects" className="projects">
        <h2 className="projects-title">Writing</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <h3>
              <Link to="/stealingparis">Stealing Paris</Link>
            </h3>
            <p>May 6, 2023</p>
            <p>Published in the Long River Review</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
