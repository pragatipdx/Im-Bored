import React, { useState } from "react";
import "../components/MainPage.css";
import GridUtil from "./GridUtil";

export default function MainPage() {
  const [className, setclassName] = useState("container");

  return (
    <>
      <div className="main">
        <div className={className}>
          <div
            className="split left"
            onMouseEnter={() => setclassName(className + " hover-left")}
            onMouseLeave={() => setclassName("container")}
          >
            <h2>
              Are you <strong>bored?</strong>
            </h2>
          </div>
          <div
            className="split right"
            onMouseEnter={() => setclassName(className + " hover-right")}
            onMouseLeave={() => setclassName("container")}
          >
            <h2>
              We have come to <strong>Help</strong>
            </h2>
          </div>
        </div>

        <div className="credit">
          Credits:
          <a href="https://www.boredapi.com/"> Bored API </a> ,{" "}
          <a href="https://unsplash.com/">Unsplash API</a> and
          <a href="http://www.voicerss.org/"> VOICERRS API </a>
        </div>
      </div>
    </>
  );
}
