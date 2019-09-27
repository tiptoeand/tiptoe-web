import React, { Component } from 'react';
import gray from './image/gray.png';
import './Navbar.css';
import tiptoe from './image/tiptoe.png';

export default class Navbar extends Component {
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
        name: 'NAVBAR',
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

                {this.state.showAbout
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
            </div>
        );
    }
}
