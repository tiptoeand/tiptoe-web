import React, { Component } from 'react';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import email from './image/email-big.png';
import facebook from './image/fb-big.png';
import insta from './image/insta-big.png';
import Footer from '../footer/footer';

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
        <NavbarDesktop />

        <div class="contactcontainer">
          <h1>RECRUITMENT</h1>
          <content><p>Applications for fall 2019 is now closed.</p></content>


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