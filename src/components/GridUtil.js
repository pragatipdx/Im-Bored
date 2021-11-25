import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import GenerateImages from "./GenerateImages";

let urls = new Array();
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
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=busy work";
  let random_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=random";

  urls.push(
    education_url,
    recreational_url,
    social_url,
    diy_url,
    charity_url,
    cooking_url,
    busywork_url,
    random_url
  );

  return (
    <div style={{ margin: "auto" }}>
      <ImageList height={180}>
        <ImageListItem
          key="Subheader"
          cols={2}
          rows={4}
          style={{ height: "auto" }}
        >
          <ListSubheader component="div">I'm Bored</ListSubheader>
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={education_url} title={"Education"} />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={recreational_url} title={"Recreation"} />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={social_url} title={"Social"} />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={diy_url} title={"DIY"} />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={charity_url} title={"Charity"} />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={cooking_url} title={"Cooking"} />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={busywork_url} title={"Busy Work"} />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={random_url} title={"Random"} />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default GridUtil;
