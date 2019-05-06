import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import tiptoe from './image/tiptoe.png';
import gray from './image/gray.png';
import Footer from '../footer/footer';
import './Press.css';
import BusinessReview from './image/cornellbusinessreview.png';
import Glogo from './image/Jungle.png';
import Koreadaily1 from './image/koreadaily.png';
import Koreadaily2 from './image/koreadailylogo.jpg';
import Koreadaily3 from './image/koreadailylogosq.png';
import Bluetree from './image/bluetree.png';
import PressImage from './PressImage';


class Press extends Component {
  constructor() {
    super();
  }

  state = {
    name: 'PRESS',
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div class="presscontainer">
          <h1>PRESS</h1>
        </div>
        <div class="pressimages">
          <PressImage />
        </div>



        <Footer />
      </div>
    );
  }
}

export default Press;
