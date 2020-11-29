import React from "react";
import Typing from "react-typing-animation";
import { Base } from "../_base/Base";
import { PressDesktop } from "./pressDesktop";
import { PressMobile } from "./pressMobile";

import tiptoe from "../image/tiptoe.png";
import MainImage from "../image/MainImage.jpeg";
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
      <div className="homemobiles">
        <div className="homemobilescontent">
          <img src={image1} alt="home image1"></img>
        </div>
        <div className="homemobilescontent2">
          <img src={image2} alt="home image2"></img>
        </div>
      </div>

      <div className="homemobiles">
        <div className="homemobilescontent2">
          <img src={image4} alt="home image4"></img>
        </div>
        <div className="homemobilescontent">
          <img src={image3} alt="home image3"></img>
        </div>
      </div>

      <div className="homemobiles">
        <div className="homemobilescontent">
          <img src={image5} alt="home image5"></img>
        </div>
        <div className="homemobilescontent2">
          <img src={image6} alt="home image6"></img>
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
