import React from "react";
import home1 from "@/image/home_1.jpg";
import threesteps1 from "@/image/threesteps1.jpg";
import threesteps2 from "@/image/threesteps2.jpg";
import home2 from "@/image/home_2.jpg";
import home3 from "@/image/home_3.jpg";
import threesteps3 from "@/image/threesteps3.jpg";

function HomeMobile() {
  return (
    <div class="homemobilecontent">
      <div class="homemobiles">
        <div class="homemobilescontent">
          <img src={home1} alt="home image1"></img>
        </div>
        <div class="homemobilescontent2">
          <img src={threesteps1} alt="home image2"></img>
        </div>
      </div>

      <div class="homemobiles">
        <div class="homemobilescontent2">
          <img src={threesteps2} alt="home image4"></img>
        </div>
        <div class="homemobilescontent">
          <img src={home2} alt="home image3"></img>
        </div>
      </div>

      <div class="homemobiles">
        <div class="homemobilescontent">
          <img src={home3} alt="home image5"></img>
        </div>
        <div class="homemobilescontent2">
          <img src={threesteps3} alt="home image6"></img>
        </div>
      </div>
    </div>
  );
}

export { HomeMobile };
