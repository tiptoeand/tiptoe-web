import React, { Component } from 'react';
import tiptoe from '../image/tiptoe.png';
import MainImage from '../image/MainImage.jpeg';
import Footer from '../footer/footer';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import NavbarMobile from '../navbar/NavbarMobile';
import Products from './Products';
import Typing from 'react-typing-animation';
import './Store.css';

class Store extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: false,
    }

    this.showAbout = this.showAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({ showAbout: true }, () => {
      document.addEventListener('click', this.closeAbout);
    });
  }

  closeAbout(event) {
    if (!this.dropdownAbout.contains(event.target)) {
      this.setState({ showAbout: false }, () => {
        document.removeEventListener('click', this.closeAbout);
      });
    }
  }

  state = {
    name: 'STORE',
  }

  render() {
    return (
      <div className="App">
        <NavbarDesktop />
        <NavbarMobile />
        < div class="imageText">
          <img src={MainImage} class="mainImage" alt="" />
        </div>

        {/*<div class="tiptoeName1">
          <img src={tiptoe} class="nameLogo1" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourName1">GREEN TREE YOUTH</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="line1"></hr>
    </div>*/}
        <Products />

        <Footer />
      </div >

    );
  }
}

export default Store;