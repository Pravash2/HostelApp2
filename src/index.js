import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import "./styles.css";
import App from "./App";
import Login from "./Login";
import Student from "./Student/Student";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id/login" component={Login} />
        <Route path="/student" component={Student} />
        <Route path="/parent" component={Student} />
        <Route path="/mentor" component={Student} />
        <Route path="/warden" component={Student} />
        <Route path="/securityGuard" component={Student} />
      </Switch>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
