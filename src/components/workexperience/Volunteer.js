import React from "react";
import "./Volunteer.css";
import NiskayunaLogo from "../../assets/volunteer/NiskayunaLogo.png";

function Niskayuna(props) {
  const NiskayunaUrl = "https://" + "www.niskayunaschools.org/";
  return (
    <div className="niskayuna">
      <h1> Volunteer </h1>
      <p>2005 - 2010</p>
      <p>Niskayuna Public Schools, Niskayuna, NY</p>
      <img src={NiskayunaLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about Niskayuna Public Schools:{" "}
          <a href={NiskayunaUrl} target="_blank" rel="noopener noreferrer">
            {NiskayunaUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Niskayuna;
