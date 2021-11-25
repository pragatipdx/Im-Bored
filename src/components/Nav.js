import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Test from "./Test";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css';


function Nav() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
        height="12"
        alt=""
        loading="lazy"
      />
    </a>
          {/* <p className="navbar-brand">I'm Bored</p> */}
          <div>
            <ul className="navbar">
            <li className="nav-link">
                <Link className="link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link className="link" to="/about">
                  About US
                </Link>
              </li>
            </ul>
          </div>    
        </nav>
           
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Test />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;