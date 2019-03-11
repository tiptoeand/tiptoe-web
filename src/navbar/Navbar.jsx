import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <Menu right>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="shop" className="menu-item" href="/">Shop</a>
                <a id="projects" className="menu-item" href="/">Projects</a>
                <a id="press" className="menu-item" href="/">Press</a>
                <a id="contact" className="menu-item" href="/">Contact</a>

            </Menu>
        );
    }
}

export default Navbar;
