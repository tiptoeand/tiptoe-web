import React from "react";
import { Router } from "react-router-dom";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { App } from "./App.jsx";

import "./base.less";

render(
  <Router history={createBrowserHistory()}>
    <App />
  </Router>,
  document.getElementById("root")
);
