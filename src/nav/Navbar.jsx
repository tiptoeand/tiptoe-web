import React from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

function Navbar() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}

export { Navbar };
