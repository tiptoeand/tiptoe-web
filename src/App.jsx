import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Navbar } from "@/nav";
import { Footer } from "@/footer";
import { Home } from "@/home";
import { Contact } from "@/contact";
import { About } from "@/about";
import { Projects } from "@/projects";
import { Press } from "@/press";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/press" component={Press} />
        <Route path="/contact" component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export { App };
