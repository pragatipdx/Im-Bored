import React from "react";
import { useState } from "react";
import GridUtil from "./GridUtil";

const Results = (props) => {
  let { display } = props;
  let [image, setImage] = useState([]);
  let [output, setOutput] = useState("");

  const nav = document.getElementById("activityLink");

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

  const activityPage = () => {
    setOutput(true);
  };
  nav.addEventListener("click", activityPage);

  return (
    <div class='resultContainer'>
      {output && <GridUtil />}
      {!output && (
        <div class="display-data">
          <section>
            <div class="output">
              <div class="image">
                <img
                  src={image}
                  width="100%"
                  height="80%"
                  alt="ActivityImage"
                />
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
                <a onClick={activityPage} class="back">
                  Search Another Activity
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Results;
