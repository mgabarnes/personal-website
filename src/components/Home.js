import React from "react";
import "./Home.css";
import profilePicture from "../assets/michaelabarnes.jpeg";

function Home() {
  return (
    <div className="home-container">
      <section id="home" className="home">
        <h2 className="home-title">Welcome!</h2>
        <img
          src={profilePicture}
          alt="Michaela Barnes"
          className="profile-picture"
        />
        <p>
          Here, you can learn more about my background, view my writing, and
          get in touch with me.
        </p>
      </section>
    </div>
  );
}

export default Home;
