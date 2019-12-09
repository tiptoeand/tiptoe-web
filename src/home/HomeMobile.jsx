import React, { Component } from 'react';
import image1 from '../image/home_1.jpg';
import image2 from '../image/threesteps1.jpg'
import image3 from '../image/home_2.jpg';
import image4 from '../image/threesteps2.jpg';
import image5 from '../image/home_3.jpg';
import image6 from '../image/threesteps3.jpg';
import './HomeMobile.css';


class HomeMobile extends Component {
  state = {
    name: 'HOMEMOBILE',
  }

  render() {
    return (
      <div class="homemobilecontent">
        <div class="homemobiles">
          <div class="homemobilescontent">
            <img src={image1} alt="home image1"></img>
          </div>
          <div class="homemobilescontent2">
            <img src={image2} alt="home image2"></img>
          </div>
        </div>

        <div class="homemobiles">
          <div class="homemobilescontent2">
            <img src={image4} alt="home image4"></img>
          </div>
          <div class="homemobilescontent">
            <img src={image3} alt="home image3"></img>
          </div>
        </div>

        <div class="homemobiles">
          <div class="homemobilescontent">
            <img src={image5} alt="home image5"></img>
          </div>
          <div class="homemobilescontent2">
            <img src={image6} alt="home image6"></img>
          </div>
        </div>

      </div>

    );
  }
}

export default HomeMobile;
