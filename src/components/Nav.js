import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import './Nav.css';
import MainPage from "./MainPage"
import FrontPage from "./FrontPage"




function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-primary justify-content-between">
          <p className="navbar-brand">I'm Bored</p>
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
              <li className="nav-link">
                <Link className="link" to="/main">
                  Front
                </Link>
              </li>
              <li className="nav-link">
                <Link className="link" to="/gallery">
                  Gallery
                </Link>
              </li>

            </ul>
          </div>    
        </nav>
           
      <Switch>
      <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/gallery">
          <FrontPage />
          </Route>      
      </Switch>
    </Router>
  );
}

export default Nav;