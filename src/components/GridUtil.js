import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GenerateImages from "./GenerateImages";

let urls = new Array();
let image_urls = new Array();
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
      <GridList cellHeight={180}>
        <GridListTile
          key="Subheader"
          cols={2}
          rows={4}
          style={{ height: "auto" }}
        >
          <ListSubheader component="div">I'm Bored</ListSubheader>
        </GridListTile>
        <GridListTile>
          <GenerateImages url={education_url} title={"Education"} />
        </GridListTile>
        <GridListTile>
          <GenerateImages url={recreational_url} title={"Recreation"} />
        </GridListTile>
        <GridListTile>
          <GenerateImages url={social_url} title={"Social"} />
        </GridListTile>
        <GridListTile>
          <GenerateImages url={diy_url} title={"DIY"} />
        </GridListTile>
        <GridListTile>
          <GenerateImages url={charity_url} title={"Charity"} />
        </GridListTile>
        <GridListTile>
          <GenerateImages url={cooking_url} title={"Cooking"} />
        </GridListTile>
        <GridListTile>
          <GenerateImages url={busywork_url} title={"Busy Work"} />
        </GridListTile>
        <GridListTile>
          <GenerateImages url={random_url} title={"Random"} />
        </GridListTile>
      </GridList>
    </div>
  );
};

export default GridUtil;
