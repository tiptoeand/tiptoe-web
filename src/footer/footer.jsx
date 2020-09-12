import React from "react";
import partner from "@/image/partner-big.svg";
import facebook from "@/image/fb-big.svg";
import instagram from "@/image/insta-big.svg";
import email from "@/image/email-big.svg";

function Footer() {
  return (
    <div class="footer">
      <div class="footer_Rectangle"></div>
      <a href="https://www.tiptoeand.com/">
        <img src={partner} alt="tiptoe& website" />
      </a>
      <a href="https://www.facebook.com/tiptoeand/">
        <img src={facebook} alt="tiptoe& facebook" />
      </a>
      <a href="https://www.instagram.com/tiptoeand_/">
        <img src={instagram} alt="tiptoe& instagram" />
      </a>
      <a href="mailto: tiptoeand.cornell@gmail.com">
        <img src={email} alt="tiptoe& email" />
      </a>
      <p>&copy;TIPTOE& 2020</p>
    </div>
  );
}

export { Footer };
