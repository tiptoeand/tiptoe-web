import React from "react";
import Typing from "react-typing-animation";
import { HomeMobile } from "./HomeMobile";
import mainimage from "@/image/MainImage.jpeg";
import tiptoe from "@/image/tiptoe.jpg";
import timeline from "@/image/Timeline.jpg";
import threeimages from "@/image/threeimages.jpg";
import threesteps from "@/image/threesteps.jpg";

function Home() {
  return (
    <div className="App">
      <div class="home_imageText">
        <img src={mainimage} class="home_mainImage" alt="Main Image" />
      </div>
      <div class="home_tiptoeName1">
        <img src={tiptoe} class="home_nameLogo1" alt="" />
        <Typing loop={true} speed={110}>
          <span class="home_yourName2">your name</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
        </Typing>
        <hr class="home_line1"></hr>
      </div>
      <img src={timeline} class="home_timelineImg" alt="" />
      <div class="home_homeimage">
        <img src={threeimages} class="home_image3" alt="" />
        <img src={threesteps} class="home_stepsImg" alt="" />
      </div>
      <HomeMobile />
    </div>
  );
}
export { Home };
