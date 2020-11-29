import React from "react";
import tiptoe from "../image/tiptoe.png";

import "./base.css";

function NavbarDesktop() {
  return (
    <div className="navbardesktop pt-1">
      <nav className="desktopnavbar navbar navbar-light justify-content-between">
        <div></div>
        <a className="navbar-brand" href="/about">
          ABOUT
        </a>
        <a className="navbar-brand" href="/projects">
          PROJECTS
        </a>
        <a className="navbar-brand" href="/">
          <img src={tiptoe} className="desktoplogoimage" alt="TIPTOE& Logo" />
        </a>
        <a className="navbar-brand" href="/store">
          STORE
        </a>
        <a className="navbar-brand" href="/faq">
          FAQ
        </a>
        <div></div>
      </nav>
    </div>
  );
}
export { NavbarDesktop };
