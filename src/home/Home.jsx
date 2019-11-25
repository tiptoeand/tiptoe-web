import React, { Component } from 'react';
import tiptoe from './image/tiptoe.png';
import MainImage from './image/MainImage.jpeg';
import Timeline from './image/Timeline.png';
import threeimages from './image/threeimages.png';
import threesteps from './image/threesteps.png';
import Footer from '../footer/footer';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';

import Typing from 'react-typing-animation';
import './Home.css';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class Home extends Component {
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
    name: 'HOME',
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <NavbarDesktop />
        < div class="imageText">
          <img src={MainImage} class="mainImage" alt="" />
        </div>


        <div class="tiptoeName">
          <img src={tiptoe} class="nameLogo" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourNameText">your name</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          {/*<hr class="line"></hr>*/}
        </div>


        {/*<div class="tiptoeName">
          <img src={tiptoe} class="nameLogo" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourName">your name</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="line"></hr>
    </div>*/}

        <img src={Timeline} class="timelineImg" alt="" />
        <img src={threeimages} class="image3" alt="" />
        <img src={threesteps} class="stepsImg" alt="" />

        {/*<div class="join">
          <div class="joinEmail">
            <p class="joinEmailText">Join the TIPTOE&</p>
            <div class="emailRect"></div>
            <button class="joinButton">JOIN</button>
          </div>
          <p class="joinEmailText2">Get updates on our current projects.</p>
          <p class="joinEmailText3">By clicking join, I accept the Privacy Policy and Terms of Use. You may unsubscribe at any time.</p>
        </div>*/}

        <Footer />
      </div >

    );
  }
}

export default Home;