import React, { Component } from 'react';
import './NavbarMobile.css';
import tiptoe from '../image/tiptoe.png';

export default class NavbarMobile extends Component {
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
    name: 'NAVBARMOBILE',
  }

  render() {
    return (

      <div className="mobilenavbar">
        <header class="header">
          <a href="/"><img src={tiptoe} class="mainlogo2" alt="Tiptoe& Logo" /></a>

          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <ul class="menu">
            <li><a href="/ourstory">OUR STORY</a></li>
            <li><a href="/ourteam">OUR TEAM</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="/press">PARTNERS/PRESS</a></li>
            <li><a href="/contact">JOIN US</a></li>
            <li><a href="/shop">SHOP</a></li>
          </ul>
        </header>

      </div>
    );
  }
}

