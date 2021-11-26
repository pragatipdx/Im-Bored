import React, { useCallback, useEffect } from "react";
import ImageList from "@material-ui/core/ImageList";
import ListSubheader from "@material-ui/core/ListSubheader";
import GenerateImages from "./GenerateImages";
import ImageListItem from "@material-ui/core/ImageListItem";

import { State, useState } from "react";

const GridUtil = () => {
  let education_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=education";
  let recreational_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=swimming";
  let social_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=friends";
  let diy_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=jigsaw";
  let charity_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=charity";
  let cooking_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=cooking";
  let busywork_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=busy";
  let music_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=music";

  let [activity, setActivity] = useState([]);

  const fetchActivity = (activity) => {
    setActivity(activity);

    fetch(`http://www.boredapi.com/api/activity?type=${activity}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ margin: "auto" }}>
      <ImageList height={200}>
        <ImageListItem
          key="Subheader"
          cols={2}
          rows={4}
          style={{ height: "auto" }}
        >
          <ListSubheader component="div">I'm Bored</ListSubheader>
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("education");
          }}
        >
          <GenerateImages url={education_url} title={"Education"} />
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("recreational");
          }}
        >
          <GenerateImages url={recreational_url} title={"Recreational"} />
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("social");
          }}
        >
          <GenerateImages url={social_url} title={"Social"} />
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("diy");
          }}
        >
          <GenerateImages url={diy_url} title={"DIY"} />
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("charity");
          }}
        >
          <GenerateImages url={charity_url} title={"Charity"} />
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("cooking");
          }}
        >
          <GenerateImages url={cooking_url} title={"Cooking"} />
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("busywork");
          }}
        >
          <GenerateImages url={busywork_url} title={"Busy Work"} />
        </ImageListItem>
        <ImageListItem
          onClick={() => {
            fetchActivity("music");
          }}
        >
          <GenerateImages url={music_url} title={"Music"} />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default GridUtil;
