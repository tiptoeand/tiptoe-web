import React from "react";
import Typing from "react-typing-animation";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/footer";
import { TeamContent } from "./teamcontent";
import tiptoe from "../image/tiptoe.png";
import teamimage from "../image/team.jpg";
import "./ourteam.css";

function Ourteam() {
  return (
    <div className="ourteampage">
      <Navbar />
      <div class="imageText">
        <img src={teamimage} class="mainImage" alt="" />
      </div>

      <div class="tiptoeNameTeam">
        <img src={tiptoe} class="nameLogoTeam" alt="" />
        <Typing loop={true} speed={110}>
          <span class="yourNameTeam">our members</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
        </Typing>
        <hr class="lineTeam"></hr>
      </div>

      <TeamContent />

      <Footer />
    </div>
  );
}
export { Ourteam };
