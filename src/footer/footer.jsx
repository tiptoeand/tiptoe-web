import React, { Component } from "react";
import fblogo from "@/image/fb-big.svg";
import emaillogo from "../image/email-big.svg";
import instalogo from "../image/insta-big.svg";
import partnerlogo from "../image/partner-big.svg";
import "./footer.css";

function Footer() {
  return (
    <div class="footer">
      <div class="Rectangle"></div>
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
      <p>&copy;TIPTOE& 2020</p>
    </div>
  );
}

export { Footer };
