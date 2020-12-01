import React from "react";
import Typing from "react-typing-animation";
import { Base } from "../_base/Base";
import { PressDesktop } from "./pressDesktop";
import { PressMobile } from "./pressMobile";

import tiptoe from "../image/tiptoe.png";
import MainImage from "../image/home.jpeg";
import Timeline from "../image/Timeline.webp";
import threeimages from "../image/threeimages.webp";
import threesteps from "../image/threesteps.webp";
import image1 from "../image/home_1.webp";
import image2 from "../image/threesteps1.jpg";
import image3 from "../image/home_2.webp";
import image4 from "../image/threesteps2.jpg";
import image5 from "../image/home_3.webp";
import image6 from "../image/threesteps3.jpg";

import "./home.css";
import "../content.css";

const HomeMobile = () => {
  return (
    <div className="homemobilecontent">
      <div className="container-fluid pb-3">
        <div className="row justify-content-center align-items-center pb-1">
          <div className="col-6">
            <img
              src={image1}
              alt="home show support"
              className="homemobilecontentimage"
            />
          </div>
          <div className="col-6">
            <img
              src={image2}
              alt="home choose wear support social cause"
              className="homemobilecontentimage"
            />
          </div>
        </div>

        <div className="row justify-content-center align-items-center pb-1">
          <div className="col-6">
            <img
              src={image4}
              alt="home spread the word"
              className="homemobilecontentimage"
            />
          </div>
          <div className="col-6">
            <img
              src={image3}
              alt="home spread awareness"
              className="homemobilecontentimage"
            />
          </div>
        </div>

        <div className="row justify-content-center align-items-center pb-1">
          <div className="col-6">
            <img
              src={image5}
              alt="home take action"
              className="homemobilecontentimage"
            />
          </div>
          <div className="col-6">
            <img
              src={image6}
              alt="home profit goes to charity"
              className="homemobilecontentimage"
            />
          </div>
        </div>
      </div>

      <PressMobile />
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="homecontainer">
      <div className="imageText">
        <img src={MainImage} className="titleImage" alt="tiptoe" />
      </div>
      <div className="tiptoeName1">
        <img src={tiptoe} className="nameLogo1" alt="typing home logo" />
        <Typing loop={true} speed={110}>
          <span className="yourName2">your name</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
        </Typing>
        <hr className="line1"></hr>
      </div>
      <img src={Timeline} className="timelineImg" alt="Tiptoe Home Timeline" />
      <div className="homeimage">
        <img src={threeimages} className="image3" alt="Tiptoe Home 3" />
        <img src={threesteps} className="stepsImg" alt="Tiptoe Home Steps" />

        <PressDesktop />
      </div>
      <HomeMobile />
    </div>
  );
};
function Home() {
  return <Base content={HomeContent} />;
}

export { Home };
