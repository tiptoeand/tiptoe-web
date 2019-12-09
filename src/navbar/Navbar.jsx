import React, { Component } from 'react';
import MobileNavbar from './MobileNavbar';
import './Navbar.css';
import tiptoe from '../image/tiptoe.png';

export default class Navbar extends Component {
    state = {
        name: 'NAVBAR',
    }

    render() {
        return (
            <div class="navbar">
                <div class="navbutton">
                    <a href="/ourstory" class="navLeft">ABOUT</a>
                    <a href="/projects" class="navLeft">PROJECTS</a>
                    <a href="/contact" class="navShop">CONTACT</a>
                    <a href="/press" class="navPress">PRESS</a>
                    <a href="/"><img src={tiptoe} class="mainlogo" alt="TIPTOE& Logo" /></a>
                </div>
                <MobileNavbar />
            </div>
        );
    }
}
