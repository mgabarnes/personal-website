import React from "react";
import "./Teacher.css";
import LexingtonLogo from "../../assets/teacher/LexingtonLogo.jpeg";

function Teacher(props) {
  const TeacherUrl = "https://" + "www.lexingtonma.org/lhs/.org/";
  return (
    <div className="teacher">
      <h1> Substitute Teacher and Volunteer </h1>
      <p>2010 - 2023</p>
      <p>Lexington Public Schools, Lexington, MA</p>
      <img src={LexingtonLogo} alt="logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>Information...</li>
        <li>
          See more about Lexington Public Schools:{" "}
          <a href={TeacherUrl} target="_blank" rel="noopener noreferrer">
            {TeacherUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Teacher;
