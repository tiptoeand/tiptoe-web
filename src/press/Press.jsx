import React, { Component } from 'react';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import NavbarMobile from '../navbar/NavbarMobile';
import Footer from '../footer/footer';
import PressImage from './PressImage';
import Navbar from '../navbar/Navbar';
import PressMobile from './PressMobile';
import './Press.css';

class Press extends Component {
  render() {
    return (
      <div>
        <NavbarDesktop />
        <NavbarMobile />
        <div class="presscontainer">
          <h2>PRESS</h2>
        </div>
        <div class="pressimages">
          <PressImage />
        </div>
        <PressMobile />
        <Footer />
      </div>
    );
  }
}

export default Press;
