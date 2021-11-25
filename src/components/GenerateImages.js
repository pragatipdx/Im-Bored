import React from "react";
import { useState} from "react";


const GenerateImages = (props) => {
  let { url} = props;

  let [state, setState] = useState([]);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setState(data.results[0].urls.thumb);
    })

    .catch((error) => {
      console.error(error);
    });

  return (
    <>
      <img src={state} alt="ActivityImage"/>
    </>
  );
};
export default GenerateImages;
