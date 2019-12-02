import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Ourstory from './ourstory/ourstory.jsx';
import Contact from './contact/Contact.jsx';
import Press from './press/Press.jsx';
import Navbar from './navbar/Navbar';
//import PressImage from './press/PressImage';

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/ourstory/" component={Ourstory} />
            <Route path="/contact/" component={Contact} />
            <Route path="/press/" component={Press} />
            <Route path="/navbar/" component={Navbar} />
            {/*<Route path="/pressimage/" component={PressImage} />*/}
        </div>
    </Router>
);

export default AppRouter;
