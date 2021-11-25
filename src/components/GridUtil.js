import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import GenerateImages from "./GenerateImages";

import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import SchoolIcon from "@material-ui/icons/School";
import CreateIcon from "@material-ui/icons/Create";
import PublicIcon from "@material-ui/icons/Public";
import BrushIcon from "@material-ui/icons/Brush";
import HealingIcon from "@material-ui/icons/Healing";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PlaceIcon from '@material-ui/icons/Place';
import BusinessIcon from '@material-ui/icons/Business';

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
  let relaxation_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=relaxation";
  let random_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=random";

  urls.push(
    education_url,
    recreational_url,
    social_url,
    diy_url,
    charity_url,
    cooking_url,
    relaxation_url,
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
          <GenerateImages url={education_url} />
          <ImageListItemBar
            title="Education"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <SchoolIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={recreational_url} />
          <ImageListItemBar
            title="Recreation"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <CreateIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={social_url} />
          <ImageListItemBar
            title="Social"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <PublicIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={diy_url} />
          <ImageListItemBar
            title="DIY"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <BrushIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={charity_url} />
          <ImageListItemBar
            title="Charity"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <HealingIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={cooking_url} />
          <ImageListItemBar
            title="Cooking"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <RestaurantIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={relaxation_url} />
          <ImageListItemBar
            title="Relaxation"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <PlaceIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <GenerateImages url={random_url} />
          <ImageListItemBar
            title="Random"
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <BusinessIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default GridUtil;
