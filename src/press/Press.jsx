import React, { Component } from 'react';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import NavbarMobile from '../navbar/NavbarMobile';
import Footer from '../footer/footer';
import PressImage from './PressImage';
import Navbar from '../navbar/Navbar';
import './Press.css';

class Press extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="presscontainer">
          <h2>PRESS</h2>
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
