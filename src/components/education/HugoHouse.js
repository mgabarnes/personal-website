import React from "react";
import "./HugoHouse.css";
import HugoHouseLogo from "../../assets/hugohouse/HugoHouseLogo.png";

function HugoHouse(props) {
  const HugoHouseUrl = "https://" + "hugohouse.org/";
  return (
    <div className="hugohouse">
      <h1> Hugo House </h1>
      <p>Length of Time...</p>
      <p>Location...</p>
      <img src={HugoHouseLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about Hugo House:{" "}
          <a href={HugoHouseUrl} target="_blank" rel="noopener noreferrer">
            {HugoHouseUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HugoHouse;
