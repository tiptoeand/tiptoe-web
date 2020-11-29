import React from "react";
import { NavbarMobile } from "./navbarMobile";
import { NavbarDesktop } from "./navbarDesktop";
import { Footer } from "./footer";

function Base(props) {
  return (
    <div className="align-content-center align-items-center justify-content-center">
      <NavbarDesktop />
      <NavbarMobile />
      {props.content()}
      <Footer />
    </div>
  );
}

export { Base };
