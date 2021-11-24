import React from "react";
import { useState} from "react";

import GridListTileBar from "@material-ui/core/GridListTileBar";

import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";


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
      <img src={state} />
      <GridListTileBar
        title={title}
        subtitle={<span>Activity Type</span>}
        actionIcon={
          <IconButton aria-label={`Best Place to learn`}>
            <InfoIcon />
          </IconButton>
        }
      />
    </>
  );
};
export default GenerateImages;
