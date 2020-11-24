import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/footer";
import { PressImage } from "./PressImage";
import { PressMobile } from "./PressMobile";
import "./Press.css";

function Press() {
  return (
    <div>
      <Navbar />
      <div class="presscontainer">
        <h2>PRESS</h2>
      </div>
      <div class="pressimages">
        <PressImage />
      </div>
      <PressMobile />
      <Footer />
    </div>
  );
}
export { Press };
