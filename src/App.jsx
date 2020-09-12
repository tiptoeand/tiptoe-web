import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { Navbar } from "@/nav";
import { Footer } from "@/footer";
import { Home } from "@/home";
import { Contact } from "@/contact";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/projects" component={Home} />
        <Route path="/press" component={Home} />
        <Route path="/contact" component={Contact} />

        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export { App };
