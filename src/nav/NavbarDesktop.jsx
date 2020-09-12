import React from "react";
import tiptoe from "../image/tiptoe.jpg";

function NavbarDesktop() {
  return (
    <div className="container-fluid navbardesktop mb-4">
      <div className="row justify-content-center text-center">
        <div className="col-2">
          <a href="/about" className="navbardesktop_button">
            ABOUT
          </a>
        </div>
        <div className="col-2">
          <a href="/projects" className="navbardesktop_button">
            PROJECTS
          </a>
        </div>
        <div className="col-4">
          <a href="/">
            <img src={tiptoe} class="navbardesktop_logo" alt="TIPTOE&" />
          </a>
        </div>
        <div className="col-2">
          <a href="/press" className="navbardesktop_button">
            PRESS
          </a>
        </div>
        <div className="col-2">
          <a href="/contact" className="navbardesktop_button">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

export { NavbarDesktop };
