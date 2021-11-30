import React from "react";
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

import { useState } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { DEFAULTS } from "./AppEnum";

const apiKey = '160c39babf6b409bb825cf8f50da5409';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
    let [state, setState] = useState([]);

    let [Text, setText] = useState([]);
    const [speech, setSpeech] = useState(DEFAULTS.SPEECH);
   

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setState('');
    }

    

    const BoredData = (props) => {
      setActivity(props);

  
      fetch(`http://www.boredapi.com/api/activity?type=${activity}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setState(data.activity);
        })
  
        .catch((error) => {
          console.error(error);
        });
    }

    

    const handleClick = (props) => {
      const audioSrc = `http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${Text}&r=0`
      setText(props);   
      setSpeech(audioSrc);
    }

  return (
     
    <div style={{ margin: "auto" }}>
        <>
    { speech && <audio autoPlay src={speech}></audio> }
    </> 
      <ImageList height={200}>
        <ImageListItem
          key="Subheader"
          cols={2}
          rows={4}
          style={{ height: "auto" }}
        >
        </ImageListItem>
        <ImageListItem   onClick={() => {
                handleClick("education");
                }} 
        >
          <GenerateImages url={education_url} />
          <ImageListItemBar
             title="Education"
             subtitle={<span>Learn something interesting!</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {  
                  BoredData("education");
                  handleOpen();              
                }}
                             
                >   
                 <SchoolIcon />
               </IconButton>
             }
           />
           <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>

        </ImageListItem>
        <ImageListItem onClick={() => {
                handleClick("Recreation");
                }} 
        >
          <GenerateImages url={recreational_url}  />
          <ImageListItemBar
             title="Recreation"
             subtitle={<span>Would you like to have fun?</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {
                BoredData("recreational");
                handleOpen();}}
               >
                 <CreateIcon />
               </IconButton>
             }
           />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>
          </ImageListItem>
          <ImageListItem onClick={() => {
                handleClick("Social");
                }} 
          >
            <GenerateImages url={social_url}/>
            <ImageListItemBar
             title="Social"
             subtitle={<span>Social activities are great!</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {
                  BoredData("social");
                  handleOpen();}}
               >
                 <PublicIcon />
               </IconButton>
             }
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>
            </ImageListItem>
            <ImageListItem onClick={() => {
                handleClick("DIY");
                }} 
            >
          <GenerateImages url={diy_url} />
          
           <ImageListItemBar
             title="DIY"
             subtitle={<span>Do it yourself.</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {
                  BoredData("diy");
                  handleOpen();}}
               >
                 <BrushIcon />
               </IconButton>
             }
           />
           <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>
          </ImageListItem>
          <ImageListItem onClick={() => {
                handleClick("Charity");
                }} 
          >
            <GenerateImages url={charity_url} />
            <ImageListItemBar
             title="Charity"
             subtitle={<span>There's always more to give</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {
                  BoredData("charity");
                  handleOpen();}}
               >
                 <HealingIcon />
               </IconButton>
             }
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>
          </ImageListItem>
          <ImageListItem onClick={() => {
                handleClick("Cooking");
                }} 
          >
            <GenerateImages url={cooking_url} />
            <ImageListItemBar
             title="Cooking"
             subtitle={<span>Let's mess around in kitchen</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {
                  BoredData("cooking");
                  handleOpen();}}
               >
                 <RestaurantIcon />
               </IconButton>
             }
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>
          </ImageListItem>
          <ImageListItem onClick={() => {
                handleClick("Relaxation");
                }} 
          >
            <GenerateImages url={relaxation_url}  />
            <ImageListItemBar
             title="Relaxation"
             subtitle={<span>Stressed? Just chill</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {
                  BoredData("relaxation");
                  handleOpen();}}
               >
                 <PlaceIcon />
               </IconButton>
             }
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>
          </ImageListItem>
          <ImageListItem onClick={() => {
                handleClick("Music");
                }} 
          >
            <GenerateImages url={music_url} />
            <ImageListItemBar
             title="Music"
             subtitle={<span>Get your volume up!</span>}
             actionIcon={
               <IconButton aria-label={`Best Place to learn`}
                onClick={() => {
                  BoredData("music");
                  handleOpen();}}
               >
                 <MusicIcon />
               </IconButton>
             }
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your suggested activity is -
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {state}
              </Typography>
              </Box>
            </Modal>
          </ImageListItem>
      </ImageList>
    </div>
  );
};

export default GridUtil;
