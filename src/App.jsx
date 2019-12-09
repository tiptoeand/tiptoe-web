import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Ourstory from './ourstory/ourstory.jsx';
import Contact from './contact/Contact.jsx';
import Press from './press/Press.jsx';
import Projects from './projects/projects';
import Navbar from './navbar/Navbar';
import Store from './store/Store';
import Ourteam from './ourteam/ourteam';

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/ourstory/" component={Ourstory} />
            <Route path="/contact/" component={Contact} />
            <Route path="/press/" component={Press} />
            <Route path="/projects/" component={Projects} />
            <Route path="/shop/" component={Store} />
            <Route path="/ourteam/" component={Ourteam} />
            <Route path="/navbar/" component={Navbar} />

        </div>
    </Router>
);

export default AppRouter;
