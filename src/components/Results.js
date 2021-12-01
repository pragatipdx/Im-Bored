import React from "react";
import GridUtil from "./GridUtil";
import FrontPage from "./FrontPage";

import { State, useState } from "react";
import {
  PriorityHighSharp,
  SettingsSystemDaydreamTwoTone,
} from "@material-ui/icons";

const Results = (props) => {
  let { display } = props;
  let [image, setImage] = useState([]);

  fetch(
    `https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=${display.type}`
  )
    .then((response) => response.json())
    .then((data) => {
      setImage(data.results[3].urls.small);
    })

    .catch((error) => {
      console.error(error);
    });
  console.log(display);

  return (
    <div class="display-data">
      <nav id="header2">
        <div class="logo">Xplore</div>

        <ul>
          <li>
            <a href="" data-after="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/activities" data-after="Activities">
              Activities
            </a>
          </li>
          <li>
            <a href="./frontpage" data-after="Gallery">
              Gallery
            </a>
          </li>
          <li>
            <a href="./about" data-after="About Us">
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <section>
        <div class="output">
          <div class="image">
            <img src={image} width="100%" height="80%" alt="ActivityImage" />
          </div>

          <div class="content">
            <h1>{display.activity}</h1>
            {display.participants && (
              <p>
                <b>Participants: </b>
                {display.participants}{" "}
              </p>
            )}
            {display.price != undefined && (
              <p>
                <b>Price: </b>
                {display.price}{" "}
              </p>
            )}
            {display.accessibility != undefined && (
              <p>
                <b>Accessibility: </b>
                {display.accessibility}{" "}
              </p>
            )}
            {display.link && (
              <p>
                <b>Link: </b>
                <a href="{display.link}">{display.link}</a>{" "}
              </p>
            )}
            <a href="/activities" class="back">
              Search Another Activity
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
