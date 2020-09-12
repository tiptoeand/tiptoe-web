import React from "react";
import facebook from "../image/fb-large.svg";
import insta from "../image/insta-large.svg";
import partner from "../image/partner-large.svg";
import email from "../image/email-large.svg";

import "./Contact.css";

function Contact() {
  return (
    <div className="App">
      <div className="contactcontainer">
        <h2>RECRUITMENT</h2>
        <content>
          <p>Applications for spring 2019 is now closed.</p>
        </content>

        <h2>CONTACT US</h2>
        <p>
          <img class="logoImage" src={partner} />
          www.tiptoeand.com
        </p>
        <p>
          <img class="logoImage2" src={facebook} />
          https://www.facebook.com/tiptoeand/
        </p>
        <p>
          <img class="logoImage" src={insta} />
          https://www.instagram.com/tiptoeand_/
        </p>
        <p>
          <img class="logoImage" src={email} />
          tiptoeand.cornell@gmail.com
        </p>
      </div>
    </div>
  );
}

export { Contact };
