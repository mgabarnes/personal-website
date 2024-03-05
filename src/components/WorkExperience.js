import React from "react";
import "./WorkExperience.css";
import { Link } from "react-router-dom";

function WorkExperience() {
  return (
    <div className="workexperience-container">
      <section id="work-experience" className="workexperience">
        <h2 className="workexperience-title">Work Experience</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <h3>
              <Link to="/Tesla">
                {" "}
                Community Consultant, IACUC Board Member
              </Link>
            </h3>
            <p>2013 - 2019 · 6 years</p>
            <p>Takeda (formerly Shire) Pharmceuticals, Cambridge, MA · Self-employed</p>
          </li>
          <li>
            <h3>
              <Link to="/Fresenius">
                {" "}
                Field Producer, Frontline, NOVA, National Programming
              </Link>
            </h3>
            <p>1990 - 2000 · 10 yrs</p>
            <p>WGBH</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default WorkExperience;
