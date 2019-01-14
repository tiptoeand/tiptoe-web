import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        hi: 'Hello, World!',
    }

    render() {
        const { hi } = this.state;
        return (
            <div className="App">
                <h1>{hi}</h1>
            </div>
        );
    }
}

export default App;
