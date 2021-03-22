import React from "react";
import { Base } from "../_base/Base";

import MainImage from "../image/faq.jpeg";
import facebook from "../image/fb-large.svg";
import insta from "../image/insta-large.svg";
import partner from "../image/partner-large.svg";
import email from "../image/email-large.svg";

import "./faq.css";
import "../content.css";

import Fak from 'react-faq-component';

const data = {
  title: "ORDERS",
  rows: [
    {
      title: "When is our next project being released?",
      content: "Our next project release date will be revealed soon!"
    },
    {
      title: "How do I place an order?",
      content: "We are currently finalizing our ordering process and it will be released on."
    },
    {
      title: "When and how do I receive my order? ",
      content: "We will be monitoring the COVID situation around campus and are in the process of finalizing safe pickup locations."
    },
    {
      title: "When will our web store be open?",
      content: "The web store is currently in development for our next project!"
    }]

}

const data1 = {
  title: "ABOUT TIPTOE&",
  rows: [
    {
      title: "What does TIPTOE& mean?",
      content: "Our name comes from the idea that it doesn't take much effort to tiptoe and peer over a wall to gain a whole new perspective."
    },
    {
      title: "I want to get involved. How can I join?",
      content: "TIPTOE& is a Cornell University Organization that welcomes all Cornell students! We have teams in Fashion Design, Website Development, Communications, Digital Marketing Design, Video and Photography, Internal Consulting, and Human Resources. Applications for Spring 2021 are now closed. We hope to see you next semester!"
    },
    {
      title: "How are organizations selected for each project",
      content: "We look for organizations that match our mission. An example of who we’ve worked with is the Green Tree Youth Violence Prevention Foundation (Cheongyedan)."
    },
    {
      title: "What percentage of proceeds go to charity?",
      content: "On average we donate the majority of our profits to charity. The rest of the proceeds go into funding our current/future projects."
    },
    {
      title: "My organization is interested in collaborating with TIPTOE&. How can I reach out?",
      content: "Please reach out to the TIPTOE& email at tiptoeand.cornell@gmail.com"
    }
  ],
  styles: {
    rowContentPaddingTop: '50px',
  }
}

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
      <br />
      <h2>RECRUITMENT</h2>
      <content>
        <p>
          Applications for {ss} {yr_num} are now closed.
        </p>
      </content>

      <div className="faq-content">
        <Fak data={data} />
      </div>
      <br />
      <br />
      <div className="faq-content">
        <Fak data={data1} />
      </div>
      <br />
      <br />

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
