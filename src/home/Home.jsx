import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';

class Home extends Component {
    state = {
        name: 'HOME',
    }

    render() {
        const { name } = this.state;
        return (
            <div className="App">
                <Navbar />
                <h1>{name}</h1>
            </div>
        );
    }
}

export default Home;
