import React, { Component } from 'react';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import tiptoe from './image/tiptoe.png';
import Footer from '../footer/footer';
import peering from './image/peeringdown.png';
import Typing from 'react-typing-animation';

import './ourstory.css';

class Ourstory extends Component {
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
    name: 'OURSTORY',
  }


  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <NavbarDesktop />

        <img src={peering} class="mainImage2" alt="" />
        <div class="ourmissioncontainer">
          <h1>our mission</h1>
          <p>Clothing is the final layer of expressing oneself and their values. TIPTOE& is a fashion enterprise that aims<br />
            to transform the traditional fundraising T-shirts into trendy streetwear to raise awareness of various social<br />
            issues. By adding a layer of meaning to our clothing, our company hopes to present new perspective.</p>
        </div>
        <div class="tiptoeName">
          <img src={tiptoe} class="nameLogo" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourName">our story </span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="line"></hr>
        </div>
        <div class="video">
          <iframe src="https://drive.google.com/file/d/1ws-NjD_9SmbFqMiiPgYkoRFPrr1blEZk/preview" width="720" height="480" ></iframe>
        </div>
        <div class="ourmissioncontainer2">
          <p>Our name comes from the idea that it doesn't take much effort to tiptoe <br />
            and peer over a wall to gain a whole new perspective.
          <br />
            <br />
            TIPTOE& was founded by three Cornell students with two questions in<br />
            mind:
          <br />
            <br />
            Why are fundraising T-shirts poorly designed?<br />Why is streetwear always associated with social resistance?<br /></p>
          <br />
          <h1>We are challenging these norms.</h1>
          <br />
          <p>By combining streetwear's provacative design with fundraising's social<br />
            cause, we aim to <strong>redefine the culture of donation</strong>. A good cause<br />
            doesn't necessarily have to precede consumerism. TIPTOE& partners<br />
            with different NGOs for every social cause we want to uncover. Tiptoe&<br />
            donates a share of profits to the partnering NGOs. So we encourage<br />
            you to join us and throw on another layer.</p>

        </div>



        <Footer />


      </div>



    );
  }
}

export default Ourstory;