import React from "react";
import { useState } from "react";
import SchoolIcon from "@material-ui/icons/School";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";


const GenerateImages = (props) => {
  let { url, title } = props;

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
      <img src={state} height="200" width="100%" alt="ActivityImage" />
      <ImageListItemBar
        title={title}
        subtitle={<span>Activity Type</span>}
        actionIcon={
          <IconButton aria-label={`Best Place to learn`}>
            <SchoolIcon />
          </IconButton>
        }
      />
    </>
  );
};
export default GenerateImages;
