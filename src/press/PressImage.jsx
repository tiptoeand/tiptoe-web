import React from "react";
import koreadaily from "@/image/koreadaily.jpg";
import cornellbusinessreview from "@/image/cornellbusinessreview.jpg";
import koreadaily2 from "@/image/koreadailylogo.jpg";
import bluetree from "@/image/bluetree.jpg";
import koreadaily3 from "@/image/koreadailylogosq.jpg";
import jungle from "@/image/Jungle.jpg";

function PressImage() {
  return (
    <div className="App">
      <div class="hvrbox">
        <a href="http://www.koreadaily.com/news/read.asp?art_id=6178286">
          <img
            src={koreadaily}
            alt="Korea Daily Logo #1"
            class="hvrbox-layer_bottom"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              Social enterprise operated by Korean Students at Cornell
              University
            </div>
          </div>
        </a>
      </div>

      <div class="hvrbox">
        <a href="http://www.cornellbusinessreview.com/cbr/2017/11/12/a-conversation-with-tiptoes-luke-hong-gi-baek-hyun-kyoo-choi-and-jinhyung-moon">
          <img
            src={cornellbusinessreview}
            alt="Business Review Logo"
            class="hvrbox-layer_bottom"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              A Conversation with TIPTOE&'s Luke Hong Gi Baek, Hyun Kyoo Choi
              and JinHyung Moon
            </div>
          </div>
        </a>
      </div>

      <div class="hvrbox">
        <a href="http://www.koreadaily.com/news/read.asp?art_id=6179143">
          <img
            src={koreadaily2}
            alt="Korea Daily Logo #2"
            class="hvrbox-layer_bottom"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">Press Description #3</div>
          </div>
        </a>
      </div>

      <div class="hvrbox">
        <a href="https://blog.naver.com/bakbht/221197114516">
          <img
            src={bluetree}
            alt="Blue Tree Logo"
            class="hvrbox-layer_bottom"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">Press Description #4</div>
          </div>
        </a>
      </div>

      <div class="hvrbox">
        <a href="http://www.koreadaily.com/news/read.asp?art_id=6181719">
          <img
            src={koreadaily3}
            alt="Korea Daily Logo #3"
            class="hvrbox-layer_bottom"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">Press Description #5</div>
          </div>
        </a>
      </div>

      <div class="hvrbox">
        <a href="https://jungle.co.kr/magazine/27289">
          <img
            src={jungle}
            alt="Design Jungle Logo"
            class="hvrbox-layer_bottom"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">Press Description #6</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PressImage;
