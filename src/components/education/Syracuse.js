import React from "react";
import "./Syracuse.css";
import SyracuseLogo from "../../assets/syracuse/syracuse_horizontal_1Line.svg";

function Syracuse(props) {
  const SyracuseUrl = "https://" + "www.syracuse.edu/";
  return (
    <div className="syracuse">
      <h1> Syracuse </h1>
      <p>Length of Time...</p>
      <p>Location...</p>
      <img src={SyracuseLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about Syracuse:{" "}
          <a href={SyracuseUrl} target="_blank" rel="noopener noreferrer">
            {SyracuseUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Syracuse;
