import React from "react";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";

function Navbar() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
export { Navbar };
