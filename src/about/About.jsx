import React from "react";
import tiptoe from "@/image/tiptoe.jpg";
import peering from "@/image/peeringdown.jpg";
import Typing from "react-typing-animation";
import "./ourstory.css";

function About() {
  return (
    <div className="App">
      <img src={peering} class="mainImage_about" alt="Main Image Peering" />
      <div class="ourmissioncontainer">
        <h1>Our Mission</h1>
        <p class="textContent_about">
          Clothing is the final layer of expressing oneself and their values.
          TIPTOE& is a fashion enterprise that aims to transform the traditional
          fundraising T-shirts into trendy streetwear to raise awareness of
          various social issues. By adding a layer of meaning to our clothing,
          our company hopes to present new perspective.
        </p>
        {/* 
        <div class="tiptoeName_about">
          <img src={tiptoe} class="nameLogo_about" alt="" />
          <Typing loop={true} speed={110}>
            <span class="about_name">our story</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="lineabout"></hr>
        </div> */}
      </div>
      <div class="video">
        <iframe
          src="https://drive.google.com/file/d/1ws-NjD_9SmbFqMiiPgYkoRFPrr1blEZk/preview"
          width="720"
          height="480"
        ></iframe>
      </div>

      <div class="ourmissioncontainer3">
        <p class="textContent3">
          Our name comes from the idea that it doesn't take much effort to
          tiptoe and peer over a wall to gain a whole new perspective.
        </p>
        <p class="textContent3">
          TIPTOE& was founded by three Cornell students with two questions in
          mind:{" "}
        </p>
        <p class="textContent3">
          Why are fundraising T-shirts poorly designed?
          <br />
          Why is streetwear always associated with social resistance?
        </p>
        <h2>We are challenging these norms.</h2>
        <br />
        <p class="textContent3">
          By combining streetwear's provacative design with fundraising's social
          cause, we aim to <strong>redefine the culture of donation</strong>. A
          good cause doesn't necessarily have to precede consumerism. TIPTOE&
          partners with different NGOs for every social cause we want to
          uncover. Tiptoe& donates a share of profits to the partnering NGOs. So
          we encourage you to join us and throw on another layer.
        </p>
      </div>
    </div>
  );
}

export { About };
