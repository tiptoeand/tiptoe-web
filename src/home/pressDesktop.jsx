import React from "react";
import BusinessReview from "../image/cornellbusinessreview.png";
import Glogo from "../image/Jungle.png";
import Koreadaily1 from "../image/koreadaily.png";
import Koreadaily2 from "../image/koreadailylogo.jpg";
import Koreadaily3 from "../image/koreadailylogosq.png";
import Bluetree from "../image/bluetree.png";
import "./home.css";

function PressDesktop() {
  return (
    <center>
      <div className="container-fluid presssection align-self-center">
        <div className="hvrbox">
          <a href="http://www.koreadaily.com/news/read.asp?art_id=6178286">
            <img
              src={Koreadaily1}
              alt="Korea Daily Logo #1"
              className="hvrbox-layer_bottom"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">
                Social enterprise operated by Korean Students at Cornell
                University
              </div>
            </div>
          </a>
        </div>

        <div className="hvrbox">
          <a href="http://www.thecornellbusinessreview.com/cbrnow/2017/11/12/a-conversation-with-tiptoes-luke-hong-gi-baek-hyun-kyoo-choi-and-jinhyung-moon">
            <img
              src={BusinessReview}
              alt="Business Review Logo"
              className="hvrbox-layer_bottom"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">
                A Conversation with TIPTOE&'s Luke Hong Gi Baek, Hyun Kyoo Choi
                and JinHyung Moon
              </div>
            </div>
          </a>
        </div>

        <div className="hvrbox">
          <a href="http://www.koreadaily.com/news/read.asp?art_id=6179143">
            <img
              src={Koreadaily2}
              alt="Korea Daily Logo #2"
              className="hvrbox-layer_bottom"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">Press Description #3</div>
            </div>
          </a>
        </div>

        <div className="hvrbox">
          <a href="https://blog.naver.com/bakbht/221197114516">
            <img
              src={Bluetree}
              alt="Blue Tree Logo"
              className="hvrbox-layer_bottom"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">Press Description #4</div>
            </div>
          </a>
        </div>

        <div className="hvrbox">
          <a href="http://www.koreadaily.com/news/read.asp?art_id=6181719">
            <img
              src={Koreadaily3}
              alt="Korea Daily Logo #3"
              className="hvrbox-layer_bottom"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">Press Description #5</div>
            </div>
          </a>
        </div>

        <div className="hvrbox">
          <a href="https://www.jungle.co.kr/magazine/27289">
            <img
              src={Glogo}
              alt="Design Jungle Logo"
              className="hvrbox-layer_bottom"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">Press Description #6</div>
            </div>
          </a>
        </div>
      </div>
    </center>
  );
}
export { PressDesktop };
