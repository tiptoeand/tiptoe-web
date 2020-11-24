import React from "react";
import MainImage from "../image/MainImage.jpeg";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/footer";
import Products from "./Products";
import "./Store.css";

function Store() {
  return (
    <div className="App">
      <Navbar />
      <div class="imageText">
        <img src={MainImage} class="mainImage" alt="" />
      </div>

      {/*<div class="tiptoeName1">
            <img src={tiptoe} class="nameLogo1" alt="" />
            <Typing loop={true} speed={110}>
              <span class="yourName1">GREEN TREE YOUTH</span>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={20} />
            </Typing>
            <hr class="line1"></hr>
      </div>*/}
      <Products />

      <Footer />
    </div>
  );
}
export { Store };
