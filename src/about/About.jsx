import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';

class About extends Component {
    state = {
        name: 'ABOUT',
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <Navbar />

                <h1>{name}</h1>
            </div>
        );
    }
}

export default About;
