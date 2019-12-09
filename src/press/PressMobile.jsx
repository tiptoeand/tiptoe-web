import React, { Component } from 'react';
import BusinessReview from '../image/cornellbusinessreview.png';
import Glogo from '../image/Jungle.png';
import Koreadaily1 from '../image/koreadaily.png';
import Koreadaily2 from '../image/koreadailylogo.jpg';
import Koreadaily3 from '../image/koreadailylogosq.png';
import Bluetree from '../image/bluetree.png';
import './PressMobile.css';


class PressMobile extends Component {
  state = {
    name: 'PRESSMOBILE',
  }

  render() {
    return (
      <div class="pressmobilecontent">
        <div class="pressmobiles">
          <div class="pressmobilescontent">
            <img src={Koreadaily1} alt="Korea Daily Logo"></img>
          </div>
          <div class="pressmobilescontent">
            <div class="pressmobilesdesc">"Social enterprise operated by Korean Students at Cornell University."</div>
          </div>
        </div>

        <div class="pressmobiles">
          <div class="pressmobilescontent">
            <img src={BusinessReview} alt="Cornell Business Review Logo"></img>
          </div>
          <div class="pressmobilescontent">
            <div class="pressmobilesdesc">"Social enterprise operated by Korean Students at Cornell University."</div>
          </div>
        </div>

        <div class="pressmobiles">
          <div class="pressmobilescontent">
            <img src={Koreadaily2} alt="Korea Daily Logo"></img>
          </div>
          <div class="pressmobilescontent">
            <div class="pressmobilesdesc">"Social enterprise operated by Korean Students at Cornell University."</div>
          </div>
        </div>

        <div class="pressmobiles">
          <div class="pressmobilescontent">
            <img src={Bluetree} alt="Blue Tree Logo"></img>
          </div>
          <div class="pressmobilescontent">
            <div class="pressmobilesdesc">"Social enterprise operated by Korean Students at Cornell University."</div>
          </div>
        </div>

        <div class="pressmobiles">
          <div class="pressmobilescontent">
            <img src={Koreadaily3} alt="Korea Daily Logo"></img>
          </div>
          <div class="pressmobilescontent">
            <div class="pressmobilesdesc">"Social enterprise operated by Korean Students at Cornell University."</div>
          </div>
        </div>

        <div class="pressmobiles">
          <div class="pressmobilescontent">
            <img src={Glogo} alt="Jungle Logo"></img>
          </div>
          <div class="pressmobilescontent">
            <div class="pressmobilesdesc">"Social enterprise operated by Korean Students at Cornell University."</div>
          </div>
        </div>

      </div>

    );
  }
}

export default PressMobile;
