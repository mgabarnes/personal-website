import React from "react";
import "./Contact.css";

function Contact() {
  const personalEmail = "mgabarnes" + "@" + "gmail.com";
  const linkedInUrl = "https://" + "www.linkedin.com" + "/in/michaela-barnes-41478295/";
  const instagramURL = "https://" + "www.instagram.com" + "/mibarnesg/";

  return (
    <div className="contact-container">
      <section id="contact" className="contact">
        <h2 className="contact-title">Contact</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            Email: <a href={`mailto:${personalEmail}`}>{personalEmail}</a>
          </li>
        </ul>
        <p>
        Instagram:{" "}
          <a href={instagramURL} target="_blank" rel="noopener noreferrer">
            {instagramURL}
          </a>
        </p>
        <p>
        LinkedIn:{" "}
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            {linkedInUrl}
          </a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
