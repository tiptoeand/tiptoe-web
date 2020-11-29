import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Faq } from "./faq/Faq";
import { Projects } from "./projects/Projects";
import { Store } from "./store/Store";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/projects/" component={Projects} />
        <Route exact path="/store/" component={Store} />
        <Route exact path="/faq/" component={Faq} />
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
