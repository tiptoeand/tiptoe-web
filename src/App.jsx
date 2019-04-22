import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import About from './about/About.jsx';

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
        </div>
    </Router>
);

export default AppRouter;
