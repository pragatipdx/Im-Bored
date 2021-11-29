import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import './Nav.css';
// import MainPage from "./MainPage"
// import Gallery from "./Gallery"
import HomeIcon from '@material-ui/icons/Home';



function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark justify-content-between" style={{paddingTop:"0",paddingBottom:"0", marginBottom:"0"}}>
          <div className="navbar-brand">
           I'M BORED
           </div>
           
           <div>
            <ul className="navbar">
            <li className="nav-link">
                <Link className="link" to="/home">
                  <HomeIcon />
                </Link>
              </li>
              <li className="nav-link">
                <Link className="link" to="/main">
                  Explore
                </Link>
              </li>
              <li className="nav-link">
                <Link className="link" to="/gallery">
                  Gallery
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
      <Route path="/main">
          <Home />
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
          <Home />
          </Route>      
      </Switch>
    </Router>
  );
}

export default Nav;