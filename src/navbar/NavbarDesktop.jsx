import React, { Component } from 'react';
import gray from '../image/gray.png';
import './NavbarDesktop.css';
import tiptoe from '../image/tiptoe.png';

export default class NavbarDesktop extends Component {
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
    name: 'NAVBARDESKTOP',
  }

  render() {
    return (
      <div className="NavDesktop">
        {/*<div class="dropdown">
          <button class="dropdown_b" onClick={this.showAbout}>ABOUT</button>
    </div>*/}

        <div class="navdesktop">
          <div class="navbutton">
            <a href="/ourstory" class="dropdown_b">ABOUT</a>
            <a href="/projects" class="navProjects">PROJECTS</a>
            <a href="/contact" class="navShop">CONTACT</a>
            {/*<a href="/shop" class="navShop">SHOP</a>*/}
            <a href="/press" class="navPress">PRESS</a>
            <a href="/"><img src={tiptoe} class="mainlogo" alt="TIPTOE& Logo" /></a>
          </div>
        </div>

        {this.state.showAbout
          ? (
            <div className="dropdown" ref={(element) => {
              this.dropdownAbout = element;
            }}
            >

              <div class="container">
                <div class="buttonbox">
                  <button class="button" onClick={() => window.location.href = '/ourstory'}> OUR STORY </button>
                  <button class="button" onClick={() => window.location.href = '/ourteam'}> OUR TEAM </button>
                  <button class="button" onClick={() => window.location.href = '/press'}> PARTNERS/PRESS </button>
                  <button class="button" onClick={() => window.location.href = '/contact'}> JOIN US </button>
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
      </div>
    );
  }
}


/*import React, { Component } from 'react';
import gray from '../image/gray.png';
import './Navbar.css';
import tiptoe from '../image/tiptoe.png';

export default class NavbarDesktop extends Component {
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
    name: 'NAVBARDESKTOP',
  }

  render() {
    return (
      <div className="App">
        <div class="nav">
          <div class="navbutton">
            <a href="/ourstory" class="navAbout">ABOUT</a>
            <a href="/shop" class="navProjects">SHOP</a>
            <a href="/contact" class="navShop">CONTACT</a>
            <a href="/press" class="navPress">PRESS</a>
            <a href="/"><img src={tiptoe} class="mainlogo" alt="Tiptoe& Logo" /></a>
          </div>
        </div>

        {this.state.showAbout
          ? (
            <div className="dropdown" ref={(element) => {
              this.dropdownAbout = element;
            }}
            >

              <div class="container">
                <div class="buttonbox">
                  <button class="button" onClick={() => window.location.href = '/ourstory'}> OUR STORY </button>
                  <button class="button" onClick={() => window.location.href = '/ourteam'}> OUR TEAM </button>
                  <button class="button" onClick={() => window.location.href = '/press'}> PARTNERS/PRESS </button>
                  <button class="button" onClick={() => window.location.href = '/contact'}> JOIN US </button>
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
      </div>
    );
  }
}
*/