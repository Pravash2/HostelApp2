//importing the Packages module
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

//importing the necessary files
import "./styles.css";
import App from "./App";
import Login from "./Login";
import Student from "./Student/Student";
import addParent from "./Student/AddParent";
import Parent from "./Parent/Parent";
import Mentor from "./Mentor/Mentor";
import Warden from "./Warden/Warden";
import securityGuard from "./SecurityGuard/SecurityGuard";
import Register from "./Register";

//Routing the Component
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id/login" component={Login} />
        <Route path="/:id/register" component={Register} />
        <Route path="/student" component={Student} />
        <Route path="/parent" component={Parent} />
        <Route path="/mentor" component={Mentor} />
        <Route path="/warden" component={Warden} />
        <Route path="/addParent" component={addParent} />
        <Route path="/securityGuard" component={securityGuard} />
      </Switch>
    </div>
  </Router>
);

//selecting the root id of html tag present in public/index.html page
const rootElement = document.getElementById("root");
//combining the routing and rootElement and placing html page
ReactDOM.render(routing, rootElement);
