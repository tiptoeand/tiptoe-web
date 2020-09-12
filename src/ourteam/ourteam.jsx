import React, { Component } from 'react';
import tiptoe from '../image/tiptoe.png';
import teamimage from '../image/team.jpg';
import Footer from '../footer/footer';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import NavbarMobile from '../navbar/NavbarMobile';
import TeamContent from './teamcontent';
import Typing from 'react-typing-animation';
import './ourteam.css';
import Navbar from '../navbar/Navbar';

class Ourteam extends Component {
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
    name: 'OURTEAM',
  }

  render() {
    return (
      <div className="ourteampage">
        <NavbarDesktop />
        <NavbarMobile />
        < div class="imageText">
          <img src={teamimage} class="mainImage" alt="" />
        </div>


        <div class="tiptoeNameTeam">
          <img src={tiptoe} class="nameLogoTeam" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourNameTeam">our members</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="lineTeam"></hr>
        </div>

        <TeamContent />

        <Footer />
      </div >

    );
  }
}

export default Ourteam;