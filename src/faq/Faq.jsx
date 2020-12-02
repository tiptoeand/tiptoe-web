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
    ss = "Spring";
  } else {
    ss = "Fall";
  }

  return (
    <div className="faqcontainer container-fluid justify-content-center text-center intext">
      <img
        src={MainImage}
        className="titleImage pb-3"
        alt="Tiptoe Frequently Asked Questions"
      />
      <br />
      <h2>Recruitment</h2>
      <content>
        <p>
          Applications for {ss} {yr_num} are now closed.
        </p>
      </content>

      <h2>Contact Us</h2>
      <p>
        <img className="logoImage" src={partner} alt="web" />
        <a href="www.tiptoeand.com">www.tiptoeand.com </a>
      </p>
      <p>
        <img className="logoImage2" src={facebook} alt="fb" />
        <a href="https://www.facebook.com/tiptoeand/">
          https://www.facebook.com/tiptoeand/
        </a>
      </p>
      <p>
        <img className="logoImage" src={insta} alt="insta" />
        <a href="https://www.instagram.com/tiptoeand_/">
          https://www.instagram.com/tiptoeand_/
        </a>
      </p>
      <p>
        <img className="logoImage" src={email} alt="email" />
        <a href="mailto:tiptoeand.cornell@gmail.com">
          tiptoeand.cornell@gmail.com
        </a>
      </p>
    </div>
  );
};

function Faq() {
  return <Base content={FaqContent} />;
}
export { Faq };
