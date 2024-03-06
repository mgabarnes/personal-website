import React from "react";
import "./Education.css";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="education-container">
      <section id="education" className="education">
        <h2 className="education-title">Education</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <h3>
              <Link to="/grubstreet">
                {" "}
                Grub Street
              </Link>
            </h3>
            <p>Length of time...</p>
            <p>Location...</p>
          </li>
          <li>
            <h3>
              <Link to="/stanford">
                {" "}
                Stanford Continuing Education
              </Link>
            </h3>
            <p>Length of time...</p>
            <p>Location...</p>
          </li>
          <li>
            <h3>
              <Link to="/hugohouse">
                {" "}
                Hugo House
              </Link>
            </h3>
            <p>Length of time...</p>
            <p>Location...</p>
          </li>
          <li>
            <h3>
              <Link to="/onestory">
                {" "}
                One Story
              </Link>
            </h3>
            <p>Length of time...</p>
            <p>Location...</p>
          </li>
          <li>
            <h3>
              <Link to="/palais">
                {" "}
                Palais Universitaire, Strasbourg, France
              </Link>
            </h3>
            <p>Length of time...</p>
            <p>Location...</p>
          </li>
          <li>
            <h3>
              <Link to="/syracuse">
                {" "}
                S.I. Newhouse School of Public Communications at Syracuse University
              </Link>
            </h3>
            <p>Length of time...</p>
            <p>Location...</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Education;
