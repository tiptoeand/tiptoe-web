import React, { Component } from 'react';
import NavbarDesktop from '../navbar/NavbarDesktop';
import NavbarMobile from '../navbar/NavbarMobile';
import facebook from '../image/fb-large.svg';
import insta from '../image/insta-large.svg';
import partner from '../image/partner-large.svg';
import email from '../image/email-large.svg';
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
    return (
      <div className="App">
        <NavbarDesktop />
        <NavbarMobile />

        <div class="contactcontainer">
          <h2>RECRUITMENT</h2>
          <content><p>Applications for fall 2019 is now closed.</p></content>


          <h2>CONTACT US</h2>
          <p><img class="logoImage" src={partner} />www.tiptoeand.com</p>
          <p><img class="logoImage2" src={facebook} />https://www.facebook.com/tiptoeand/</p>
          <p><img class="logoImage" src={insta} />https://www.instagram.com/tiptoeand_/</p>
          <p><img class="logoImage" src={email} />tiptoeand.cornell@gmail.com</p>
        </div>

        <Footer />

      </div>

    );
  }
}

export default Contact;