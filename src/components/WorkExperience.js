import React from "react";
import "./WorkExperience.css";
import { Link } from "react-router-dom";

function WorkExperience() {
  return (
    <div className="workexperience-container">
      <section id="work-experience" className="workexperience">
        <h2 className="workexperience-title">Experience</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <h3>
              <Link to="/teacher">
                {" "}
                Substitute Teacher and Volunteer
              </Link>
            </h3>
            <p>2010 - 2023</p>
            <p>
            Lexington Public Schools, Lexington, MA
            </p>
          </li>
          <li>
            <h3>
              <Link to="/takeda">
                {" "}
                Community Consultant, IACUC Board Member
              </Link>
            </h3>
            <p>2013 - 2019</p>
            <p>
              Takeda (formerly Shire) Pharmceuticals, Cambridge, MA ·
              Self-employed
            </p>
          </li>
          <li>
            <h3>
              <Link to="/volunteer">
                {" "}
                Volunteer
              </Link>
            </h3>
            <p>2005 - 2010</p>
            <p>
            Niskayuna Public Schools, Niskayuna, NY
            </p>
          </li>
          <li>
            <h3>
              <Link to="/wgbh">
                {" "}
                Field Producer, Frontline, NOVA, National Programming
              </Link>
            </h3>
            <p>1990 - 2000</p>
            <p>WGBH, Boston, MA</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default WorkExperience;
