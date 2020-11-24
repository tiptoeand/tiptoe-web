import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { Ourstory } from "./ourstory/ourstory";
import { Contact } from "./contact/Contact";
import { Press } from "./press/Press";
import { Projects } from "./projects/projects";
import { Store } from "./store/Store";
import { Ourteam } from "./ourteam/ourteam";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/ourstory/" component={Ourstory} />
      <Route path="/contact/" component={Contact} />
      <Route path="/press/" component={Press} />
      <Route path="/projects/" component={Projects} />
      <Route path="/shop/" component={Store} />
      <Route path="/ourteam/" component={Ourteam} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
