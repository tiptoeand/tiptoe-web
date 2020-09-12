import React from "react";
import "./NavbarMobile.css";
import tiptoe from "../image/tiptoe.jpg";

function NavbarMobile() {
  return (
    <div className="mobilenavbar">
      <header class="header">
        <a href="/">
          <img src={tiptoe} class="mainlogo2" alt="Tiptoe&" />
        </a>

        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/press">PRESS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export { NavbarMobile };
