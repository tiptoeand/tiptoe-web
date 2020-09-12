import React from "react";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import ProjectPageImage from "../image/projectpage.jpg";
import "./projects.css";

function Projects() {
  return (
    <div className="projectpage">
      <div class="imageText">
        <img src={ProjectPageImage} class="mainImage" alt="" />
      </div>
      <Project3 />
      <Project2 />
      <Project1 />
    </div>
  );
}

export { Projects };
