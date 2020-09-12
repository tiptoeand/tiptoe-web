import React from "react";
import partner from "@/image/partner-large.svg";
import facebook from "@/image/fb-large.svg";
import instagram from "@/image/insta-large.svg";
import email from "@/image/email-large.svg";

function Contact() {
  return (
    <div className="App">
      <div className="contactcontainer">
        <h2>RECRUITMENT</h2>
        <content>
          <p>Applications for fall 2020 is now open.</p>
        </content>

        <h2>CONTACT US</h2>
        <p>
          <img class="contact_logoImage" src={partner} />
          www.tiptoeand.com
        </p>
        <p>
          <img class="contact_logoImage2" src={facebook} />
          https://www.facebook.com/tiptoeand/
        </p>
        <p>
          <img class="contact_logoImage" src={instagram} />
          https://www.instagram.com/tiptoeand_/
        </p>
        <p>
          <img class="contact_logoImage" src={email} />
          tiptoeand.cornell@gmail.com
        </p>
      </div>
    </div>
  );
}

export { Contact };
