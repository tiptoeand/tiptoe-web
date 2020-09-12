import React from "react";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import projectpage from "@/image/projectpage.jpg";

function Projects() {
  return (
    <div className="projectpage">
      <div class="project_imagetext">
        <img src={projectpage} class="mainImage" alt="" />
      </div>
      <Project3 />
      <Project2 />
      <Project1 />
    </div>
  );
}

export { Projects };
