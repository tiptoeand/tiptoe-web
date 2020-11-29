import React from "react";
import { Base } from "../_base/Base";
import { Project1 } from "./project1";
import { Project2 } from "./project2";
import { Project3 } from "./project3";

import ProjectPageImage from "../image/projectpage.jpg";

import "./projects.css";
import "../content.css";

const ProjectsContent = () => {
  return (
    <div className="projectpage">
      <img src={ProjectPageImage} className="titleImage" alt="" />
      <div className="container-fluid justify-content-center text-center intext">
        <p className="titleText">Our Projects</p>
        <Project3 />
        <Project2 />
        <Project1 />
      </div>
    </div>
  );
};

function Projects() {
  return <Base content={ProjectsContent} />;
}
export { Projects };
