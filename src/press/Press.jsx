import React, { Component } from 'react';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
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
        <NavbarDesktop />
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
