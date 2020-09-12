import React from "react";
import BusinessReview from "../image/cornellbusinessreview.jpg";
import Glogo from "../image/Jungle.jpg";
import Koreadaily1 from "../image/koreadaily.jpg";
import Koreadaily2 from "../image/koreadailylogo.jpg";
import Koreadaily3 from "../image/koreadailylogosq.jpg";
import Bluetree from "../image/bluetree.jpg";
import "./PressMobile.css";

function PressMobile() {
  return (
    <div class="pressmobilecontent">
      <div class="pressmobiles">
        <div class="pressmobilescontent">
          <a href="http://www.koreadaily.com/news/read.asp?art_id=6178286">
            <img src={Koreadaily1} alt="Korea Daily Logo"></img>
          </a>
        </div>
        <div class="pressmobilescontent">
          <div class="pressmobilesdesc">
            "Social enterprise operated by Korean Students at Cornell
            University."
          </div>
        </div>
      </div>
      <div class="pressline">
        <hr />
      </div>

      <div class="pressmobiles">
        <div class="pressmobilescontent2">
          <div class="pressmobilesdesc2">
            "Social enterprise operated by Korean Students at Cornell
            University."
          </div>
        </div>
        <div class="pressmobilescontent2">
          <a href="http://www.cornellbusinessreview.com/cbr/2017/11/12/a-conversation-with-tiptoes-luke-hong-gi-baek-hyun-kyoo-choi-and-jinhyung-moon">
            <img src={BusinessReview} alt="Cornell Business Review Logo"></img>
          </a>
        </div>
      </div>
      <div class="pressline">
        <hr />
      </div>

      <div class="pressmobiles">
        <div class="pressmobilescontent">
          <a href="http://www.koreadaily.com/news/read.asp?art_id=6179143">
            <img src={Koreadaily2} alt="Korea Daily Logo"></img>
          </a>
        </div>
        <div class="pressmobilescontent">
          <div class="pressmobilesdesc">
            "Social enterprise operated by Korean Students at Cornell
            University."
          </div>
        </div>
      </div>
      <div class="pressline">
        <hr />
      </div>

      <div class="pressmobiles">
        <div class="pressmobilescontent2">
          <div class="pressmobilesdesc2">
            "Social enterprise operated by Korean Students at Cornell
            University."
          </div>
        </div>
        <div class="pressmobilescontent2">
          <a href="https://blog.naver.com/bakbht/221197114516">
            <img src={Bluetree} alt="Blue Tree Logo"></img>
          </a>
        </div>
      </div>
      <div class="pressline">
        <hr />
      </div>

      <div class="pressmobiles">
        <div class="pressmobilescontent">
          <a href="http://www.koreadaily.com/news/read.asp?art_id=6181719">
            <img src={Koreadaily3} alt="Korea Daily Logo"></img>
          </a>
        </div>
        <div class="pressmobilescontent">
          <div class="pressmobilesdesc">
            "Social enterprise operated by Korean Students at Cornell
            University."
          </div>
        </div>
      </div>
      <div class="pressline">
        <hr />
      </div>

      <div class="pressmobiles">
        <div class="pressmobilescontent2">
          <div class="pressmobilesdesc2">
            "Social enterprise operated by Korean Students at Cornell
            University."
          </div>
        </div>
        <div class="pressmobilescontent2">
          <a href="https://jungle.co.kr/magazine/27289">
            <img src={Glogo} alt="Jungle Logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PressMobile;
