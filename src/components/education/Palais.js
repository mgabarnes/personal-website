import React from "react";
import "./Palais.css";
import PalaisLogo from "../../assets/palais/PalaisLogo.jpeg";

function Palais(props) {
  const PalaisUrl = "https://" + "int.strasbourg.eu/place/-/entity/sig/1004_CUL_155";
  return (
    <div className="palais">
      <h1> Palais </h1>
      <p>Length of Time...</p>
      <p>Location...</p>
      <img src={PalaisLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about Grub Street:{" "}
          <a href={PalaisUrl} target="_blank" rel="noopener noreferrer">
            {PalaisUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Palais;
