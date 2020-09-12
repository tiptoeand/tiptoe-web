import React from "react";
import PressImage from "./PressImage";
import PressMobile from "./PressMobile";
import "./Press.css";

function Press() {
  return (
    <div>
      <div class="presscontainer">
        <h2>PRESS</h2>
      </div>
      <div class="pressimages">
        <PressImage />
      </div>
      <PressMobile />
    </div>
  );
}

export { Press };
