import React from "react";
import tiptoe from "../image/tiptoe.png";
import "./NavbarDesktop.css";

function NavbarDesktop() {
  return (
    <div className="NavDesktop">
      <div class="navdesktop">
        <div class="navbutton">
          <a href="/ourstory" class="dropdown_b">
            ABOUT
          </a>
          <a href="/projects" class="navProjects">
            PROJECTS
          </a>
          <a href="/contact" class="navShop">
            CONTACT
          </a>
          {/*<a href="/shop" class="navShop">SHOP</a>*/}
          <a href="/press" class="navPress">
            PRESS
          </a>
          <a href="/">
            <img src={tiptoe} class="mainlogo" alt="TIPTOE& Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
export { NavbarDesktop };
