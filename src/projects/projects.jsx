import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/footer";
import { Project1 } from "./project1";
import { Project2 } from "./project2";
import { Project3 } from "./project3";
import ProjectPageImage from "../image/projectpage.jpg";
import "./projects.css";
import "../ourstory/cat.css";

function Projects() {
  return (
    <div className="projectpage">
      <Navbar />
      <img src={ProjectPageImage} class="titleImage" alt="" />
      <div class="intext">
        <p class="titleText">Our Projects</p>
      </div>

      <Project3 />
      <Project2 />
      <Project1 />

      <Footer />
    </div>
  );
}
export { Projects };
