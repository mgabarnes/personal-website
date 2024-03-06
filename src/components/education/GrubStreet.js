import React from "react";
import "./GrubStreet.css";
import GrubStreetLogo from "../../assets/grubstreet/GrubStreetLogo.svg";

function GrubStreet(props) {
  const GrubStreetUrl = "https://" + "www.grubstreet.org/";
  return (
    <div className="grubstreet">
      <h1> Grub Street </h1>
      <p>Length of Time...</p>
      <p>Location...</p>
      <img src={GrubStreetLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about Grub Street:{" "}
          <a href={GrubStreetUrl} target="_blank" rel="noopener noreferrer">
            {GrubStreetUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default GrubStreet;
