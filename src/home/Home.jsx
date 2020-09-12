import React from "react";
import tiptoe from "../image/tiptoe.jpg";
import MainImage from "../image/MainImage.jpeg";
import Timeline from "../image/Timeline.jpg";
import threeimages from "../image/threeimages.jpg";
import threesteps from "../image/threesteps.jpg";
import { Footer } from "@/footer";
import Typing from "react-typing-animation";
import { HomeMobile } from "./HomeMobile";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <div class="imageText">
        <img src={MainImage} class="mainImage" alt="Main Image" />
      </div>
      <div class="tiptoeName1">
        <img src={tiptoe} class="nameLogo1" alt="" />
        <Typing loop={true} speed={110}>
          <span class="yourName2">your name</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
        </Typing>
        <hr class="line1"></hr>
      </div>
      <img src={Timeline} class="timelineImg" alt="" />
      <div class="homeimage">
        <img src={threeimages} class="image3" alt="" />
        <img src={threesteps} class="stepsImg" alt="" />
      </div>
      <HomeMobile />
    </div>
  );
}
export { Home };
