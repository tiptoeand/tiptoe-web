import React from "react";
import { Base } from "../_base/Base";

import MainImage from "../image/faq.jpeg";
import facebook from "../image/fb-large.svg";
import insta from "../image/insta-large.svg";
import partner from "../image/partner-large.svg";
import email from "../image/email-large.svg";

import "./faq.css";
import "../content.css";

const FaqContent = () => {
  var d = new Date();
  var yr_num = d.getFullYear();
  var mt_num = d.getMonth();
  var ss = "";
  if (mt_num < 6) {
    ss = "spring";
  } else {
    ss = "fall";
  }

  return (
    <div className="faqcontainer container-fluid justify-content-center text-center intext">
      <img
        src={MainImage}
        className="titleImage"
        alt="Tiptoe Frequently Asked Questions"
      />

      <h2>RECRUITMENT</h2>
      <content>
        <p>
          Applications for {ss} {yr_num} is now closed.
        </p>
      </content>

      <h2>CONTACT US</h2>
      <p>
        <img className="logoImage" src={partner} alt="web" />
        www.tiptoeand.com
      </p>
      <p>
        <img className="logoImage2" src={facebook} alt="fb" />
        https://www.facebook.com/tiptoeand/
      </p>
      <p>
        <img className="logoImage" src={insta} alt="insta" />
        https://www.instagram.com/tiptoeand_/
      </p>
      <p>
        <img className="logoImage" src={email} alt="email" />
        tiptoeand.cornell@gmail.com
      </p>
    </div>
  );
};

function Faq() {
  return <Base content={FaqContent} />;
}
export { Faq };
