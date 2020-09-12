import React from "react";
import tiptoe from "@/image/tiptoe.jpg";

function NavbarMobile() {
  return (
    <div className="mobilenavbar">
      <header class="header">
        <a href="/" class="header_a">
          <img src={tiptoe} class="mainlogo2" alt="Tiptoe&" />
        </a>

        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="/about" class="header_a">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/projects" class="header_a">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/press" class="header_a">
              PRESS
            </a>
          </li>
          <li>
            <a href="/contact" class="header_a">
              CONTACT
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export { NavbarMobile };
