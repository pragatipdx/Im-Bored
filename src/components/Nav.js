import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./Nav.css";
import MainPage from "./MainPage";

import HomeIcon from "@material-ui/icons/Home";
import GridUtil from "./GridUtil";
import FrontPage from "./FrontPage";
import App from "../App";

function Nav() {
  return (
    <nav id="header">
      <div class="logo">Xplore</div>

      <ul>
        <Link to="/">
          <li>
            <a href="" data-after="Home">
              Home
            </a>
          </li>
        </Link>
        <Link to="/activities">
          <li>
            <a href="/activites" data-after="Activities">
              Activities
            </a>
          </li>
        </Link>
        <Link to="/frontpage">
          <li>
            <a href="" data-after="Gallery">
              Gallery
            </a>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <a href="" data-after="About Us">
              About Us
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
