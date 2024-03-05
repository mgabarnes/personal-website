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
              <Link to="/iridiumiotembeddeddevice">Title of Piece 1</Link>
            </h3>
            <p>Short sub description</p>
          </li>
          <li>
            <h3>
              <Link to="/smarthand">Title of Piece 2</Link>
            </h3>
            <p>Short sub description</p>
          </li>
          <li>
            <h3>
              <Link to="/tcb">Title of Piece 3</Link>
            </h3>
            <p>Short sub description</p>
          </li>
          <li>
            <h3>
              <Link to="/dashboard">Title of Piece 4</Link>
            </h3>
            <p>Short sub description</p>
          </li>
          <li>
            <h3>
              <Link to="/charger">Title of Piece 5</Link>
            </h3>
            <p>Short sub description</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
