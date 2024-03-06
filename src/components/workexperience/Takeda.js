import React from "react";
import "./Takeda.css";
import TakedaLogo from "../../assets/takeda/TakedaLogo.avif";

function Takeda(props) {
  const TakedaUrl = "https://" + "www.takeda.com/";
  return (
    <div className="takeda">
      <h1> Community Consultant, IACUC Board Member </h1>
      <p>2013 - 2019 · 6 years</p>
      <p>Takeda (formerly Shire) Pharmceuticals, Cambridge, MA · Self-employed</p>
      <img src={TakedaLogo} alt="Hq" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          Information...
        </li>
        <li>
          See more about Takeda:{" "}
          <a href={TakedaUrl} target="_blank" rel="noopener noreferrer">
            {TakedaUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Takeda;
