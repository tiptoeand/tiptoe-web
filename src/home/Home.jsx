import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Footer from '../footer/footer.jsx';

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
                <Footer />
            </div>
        );
    }
}

export default Home;
