import React from "react";
import "./OneStory.css";
import OneStoryLogo from "../../assets/onestory/OneStoryLogo.svg";

function OneStory(props) {
  const OneStoryUrl = "https://" + "one-story.com/";
  return (  
    <div className="onestory">
      <h1> One Story </h1>
      <p>Length of Time...</p>
      <p>Location...</p>
      <img src={OneStoryLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about One Story:{" "}
          <a href={OneStoryUrl} target="_blank" rel="noopener noreferrer">
            {OneStoryUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default OneStory;
