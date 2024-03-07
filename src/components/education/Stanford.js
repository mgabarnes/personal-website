import React from "react";
import "./Stanford.css";
import StanfordLogo from "../../assets/stanford/StanfordLogo.png";

function Stanford(props) {
  const StanfordUrl = "https://" + "continuingstudies.stanford.edu/";
  return (
    <div className="stanford">
      <h1> Stanford Continuing Education </h1>
      {/* <p>Length of Time...</p> */}
      <p>Stanford University</p>
      <img src={StanfordLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about Stanford Continuing Education:{" "}
          <a href={StanfordUrl} target="_blank" rel="noopener noreferrer">
            {StanfordUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Stanford;
