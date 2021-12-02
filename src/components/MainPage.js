import React, { useState } from "react";
import "../components/MainPage.css";

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
              We'll <strong>help you!</strong>
            </h2>
          </div>
        </div>

        <div className="sources">
          Credits:
          <a href="https://www.boredapi.com/"> Bored API </a> ,{" "}
          <a href="https://unsplash.com/">Unsplash API</a> and
          <a href="http://www.voicerss.org/"> VOICERRS API </a>
        </div>
      </div>
    </>
  );
}
