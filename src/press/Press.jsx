import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Footer from '../footer/footer';
import './Press.css';
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
