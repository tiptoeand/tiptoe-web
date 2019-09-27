import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import tiptoe from './image/tiptoe.png';
import email from './image/email-big.png';
import facebook from './image/fb-big.png';
import insta from './image/insta-big.png';
import gray from './image/gray.png';
import Footer from '../footer/footer';

import Typing from 'react-typing-animation';


import './Contact.css';


class Contact extends Component {
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
    name: 'CONTACT',
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <div class="dropdown">
          <button class="dropdown_b" onClick={this.showAbout}>ABOUT</button>
        </div>

        <div class="nav">
          <div class="navbutton">
            <a href="" class="navProjects">PROJECTS</a>
            <a href="" class="navKor">한국어</a>
            <a href="" class="navShop">SHOP</a>
            <img src={tiptoe} class="mainlogo" alt="logo" />
          </div>
        </div>

        {
          this.state.showAbout
            ? (
              <div className="dropdown" ref={(element) => {
                this.dropdownAbout = element;
              }}
              >
                <div class="container">
                  <div class="buttonbox">
                    <button class="button"> OUR STORY </button>
                    <button class="button"> OUR TEAM </button>
                    <button class="button"> PARTNERS/PRESS </button>
                    <button class="button"> JOIN US </button>
                  </div>
                  <div class="imagebox1">
                    <img src={gray} class="navbarimage1" />
                    <div class="imageboxtext">OUR STORY</div>
                  </div>
                  <div class="imagebox2">
                    <img src={gray} class="navbarimage2" />
                    <div class="imageboxtext">OUR STORY</div>
                  </div>
                </div>
              </div>
            )
            : (null)
        }

        <div class="contactcontainer">
          <h1>RECRUITMENT</h1>
          <content><p>Applications for spring 2019 is now closed.</p></content>


          <h1>CONTACT US</h1>
          <p>www.tiptoeand.com</p>
          <img src={facebook} /><p>https://www.facebook.com/tiptoeand/</p>
          <img src={insta} /><p>https://www.instagram.com/tiptoeand_/</p>
          <img src={email} /><p>tiptoeand.cornell@gmail.com</p>
        </div>

        <Footer />


      </div>



    );
  }
}

export default Contact;