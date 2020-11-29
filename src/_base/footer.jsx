import React from "react";
import fblogo from "../image/fb-big.svg";
import emaillogo from "../image/email-big.svg";
import instalogo from "../image/insta-big.svg";
import partnerlogo from "../image/partner-big.svg";
import "./base.css";

function Footer() {
  var d = new Date();
  var yr_num = d.getFullYear();

  return (
    <div className="footer pt-3">
      <div className="rectangle"></div>
      <a href="https://www.tiptoeand.com/">
        <img src={partnerlogo} alt="tiptoe& website" />
      </a>
      <a href="https://www.facebook.com/tiptoeand/">
        <img src={fblogo} alt="tiptoe& facebook" />
      </a>
      <a href="https://www.instagram.com/tiptoeand_/">
        <img src={instalogo} alt="tiptoe& instagram" />
      </a>
      <a href="mailto: tiptoeand.cornell@gmail.com">
        <img src={emaillogo} alt="tiptoe& email" />
      </a>
      <p>&copy;TIPTOE& {yr_num}</p>
    </div>
  );
}
export { Footer };
