import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/footer";

import facebook from "../image/fb-large.svg";
import insta from "../image/insta-large.svg";
import partner from "../image/partner-large.svg";
import email from "../image/email-large.svg";

import "./Contact.css";

function Contact() {
  return (
    <div className="App">
      <Navbar />
      <div class="contactcontainer">
        <h2>RECRUITMENT</h2>
        <content>
          <p>Applications for fall 2020 is now closed.</p>
        </content>

        <h2>CONTACT US</h2>
        <p>
          <img class="logoImage" src={partner} alt="web" />
          www.tiptoeand.com
        </p>
        <p>
          <img class="logoImage2" src={facebook} alt="fb" />
          https://www.facebook.com/tiptoeand/
        </p>
        <p>
          <img class="logoImage" src={insta} alt="insta" />
          https://www.instagram.com/tiptoeand_/
        </p>
        <p>
          <img class="logoImage" src={email} alt="email" />
          tiptoeand.cornell@gmail.com
        </p>
      </div>

      <Footer />
    </div>
  );
}
export { Contact };
