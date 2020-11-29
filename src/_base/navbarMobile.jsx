import React from "react";
import tiptoe from "../image/tiptoe.png";
import "./base.css";

function NavbarMobile() {
  return (
    <div className="navbarmobile">
      <header className="header">
        <a href="/">
          <img src={tiptoe} className="mainlogo2" alt="Tiptoe& Logo" />
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/store">STORE</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export { NavbarMobile };
