import React, { Component } from 'react';
import './MobileNavbar.css';
import tiptoe from '../image/tiptoe.png';

export default class MobileNavbar extends Component {
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
    name: 'MOBILENAVBARs',
  }

  render() {
    return (
      <div classname="navbarmobile">
        <label>
          <input type="checkbox" />
          <span class="menu"><span class="hamburger"></span></span>
          <ul>
            <li><a href="/ourstory">ABOUT</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="/press">PRESS</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </label>
      </div>
    );
  }
}

