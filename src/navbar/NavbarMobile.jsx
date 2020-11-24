import React from "react";
import tiptoe from "../image/tiptoe.png";
import "./NavbarMobile.css";

function NavbarMobile() {
  return (
    <div className="mobilenavbar">
      <header class="header">
        <a href="/">
          <img src={tiptoe} class="mainlogo2" alt="Tiptoe& Logo" />
        </a>

        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="/ourstory">ABOUT</a>
          </li>
          {/*<li><a href="/ourteam">OUR TEAM</a></li>*/}
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/press">PRESS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          {/*<li><a href="/shop">SHOP</a></li>*/}
        </ul>
      </header>
    </div>
  );
}
export { NavbarMobile };
