import React, { useCallback, useEffect } from "react";
import ImageList from "@material-ui/core/ImageList";
import ListSubheader from "@material-ui/core/ListSubheader";
import GenerateImages from "./GenerateImages";
import ImageListItem from "@material-ui/core/ImageListItem";
import SchoolIcon from "@material-ui/icons/School";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
 import IconButton from "@material-ui/core/IconButton";
 
 import CreateIcon from "@material-ui/icons/Create";
 import PublicIcon from "@material-ui/icons/Public";
 import BrushIcon from "@material-ui/icons/Brush";
 import HealingIcon from "@material-ui/icons/Healing";
 import RestaurantIcon from '@material-ui/icons/Restaurant';
 import PlaceIcon from '@material-ui/icons/Place';
 import MusicIcon from '@material-ui/icons/MusicNote';

 import BusinessIcon from '@material-ui/icons/Business';
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
  let relaxation_url =
    "https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=yoga";
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
        <ImageListItem
          onClick={() => {
            fetchActivity("recreational");
          }}
        >
          <GenerateImages url={recreational_url}  />
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
        <ImageListItem
          onClick={() => {
            fetchActivity("social");
          }}
        >
          <GenerateImages url={social_url}/>
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
        <ImageListItem
          onClick={() => {
            fetchActivity("diy");
          }}
        >
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
        <ImageListItem
          onClick={() => {
            fetchActivity("charity");
          }}
        >
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
        <ImageListItem
          onClick={() => {
            fetchActivity("cooking");
          }}
        >
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
        <ImageListItem
          onClick={() => {
            fetchActivity("busywork");
          }}
        >
          <GenerateImages url={relaxation_url}  />
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
        <ImageListItem
          onClick={() => {
            fetchActivity("music");
          }}
        >
          <GenerateImages url={music_url} />
          <ImageListItemBar
             title="Music"
             subtitle={<span>Activity Type</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}>
                 <MusicIcon />
               </IconButton>
             }
           />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default GridUtil;
