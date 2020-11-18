import React, { Component } from 'react';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import NavbarMobile from '../navbar/NavbarMobile';
// import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';
// import Typing from 'react-typing-animation';
import TeamImage from '../image/teamresize.jpg'
import './ourstory.css';
import './cat.css';

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

  render() {
    return (
      <div className="App">
        <NavbarDesktop />
        <NavbarMobile />

        <img src={TeamImage} class="titleImage" alt="" />


        <div class="intext">
          <p class="titleText">Our Mission</p>
          <p class="descriptionText">Clothing is the final layer of expressing oneself and their values. TIPTOE& is a fashion enterprise that aims
            to transform the traditional fundraising T-shirts into trendy streetwear to raise awareness of various social
            issues. By adding a layer of meaning to our clothing, our company hopes to present new perspective.</p>

        </div>
        <div class="video">
            <iframe src="https://drive.google.com/file/d/1kL-MWddDOhm04RxBnxE-5LNozGKi0mnw/preview" width="720" height="480" title="TT Our Story Video"></iframe>
        </div>

        <div class="intext">

          <p class="descriptionText">Our name comes from the idea that it doesn't take much effort to tiptoe and peer over a wall to gain a whole new perspective.</p>
          <p class="descriptionText">TIPTOE& was founded by three Cornell students with two questions in mind: </p>
          <p class="descriptionText">Why are fundraising T-shirts poorly designed?<br />Why is streetwear always associated with social resistance?</p>
          <p class="headerText">We are challenging these norms.</p>
          <p class="descriptionText">By combining streetwear's provacative design with fundraising's social
            cause, we aim to <strong>redefine the culture of donation</strong>. A good cause
            doesn't necessarily have to precede consumerism. TIPTOE& partners
            with different NGOs for every social cause we want to uncover. Tiptoe&
            donates a share of profits to the partnering NGOs. So we encourage
            you to join us and throw on another layer.</p>

        </div>

        <Footer />


      </div >



    );
  }
}

export default Ourstory;