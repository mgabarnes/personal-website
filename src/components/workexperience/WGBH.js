import React from "react";
import "./WGBH.css";
import WGBHLogo from "../../assets/wgbh/WGBHLogo.png";

function WGBH(props) {
  const WGBHUrl = "https://" + "www.wgbh.org/";
  return (
    <div className="wgbh">
      <h1> Field Producer, Frontline, NOVA, National Programming </h1>
      <p>1990 - 2000</p>
      <p>WGBH, Boston, MA</p>
      <img src={WGBHLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about WGBH:{" "}
          <a href={WGBHUrl} target="_blank" rel="noopener noreferrer">
            {WGBHUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default WGBH;
