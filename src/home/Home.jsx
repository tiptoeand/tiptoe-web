import React from "react";
import Typing from "react-typing-animation";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/footer";
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
import "./Home.css";
import "../ourstory/cat.css";

const HomeMobile = () => {
  return (
    <div class="homemobilecontent">
      <div class="homemobiles">
        <div class="homemobilescontent">
          <img src={image1} alt="home image1"></img>
        </div>
        <div class="homemobilescontent2">
          <img src={image2} alt="home image2"></img>
        </div>
      </div>

      <div class="homemobiles">
        <div class="homemobilescontent2">
          <img src={image4} alt="home image4"></img>
        </div>
        <div class="homemobilescontent">
          <img src={image3} alt="home image3"></img>
        </div>
      </div>

      <div class="homemobiles">
        <div class="homemobilescontent">
          <img src={image5} alt="home image5"></img>
        </div>
        <div class="homemobilescontent2">
          <img src={image6} alt="home image6"></img>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div class="imageText">
        <img src={MainImage} class="titleImage" alt="tiptoe" />
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
      <Footer />
    </div>
  );
}

export { Home };
