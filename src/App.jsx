import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import About from './about/About.jsx';
import Ourstory from './ourstory/ourstory.jsx';
import Contact from './contact/Contact.jsx';

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/ourstory/" component={Ourstory} />
            <Route path="/contact/" component={Contact} />
        </div>
    </Router>
);

export default AppRouter;
