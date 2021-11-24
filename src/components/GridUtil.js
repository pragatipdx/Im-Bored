import React, { useEffect } from 'react';
import {useState} from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListTile from '@material-ui/core/ImageListItem';
import ImageListTileBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
 
const GridUtil = () => {
  let [state,setState] = useState('');
  let source= null;

  const unsplash = () => {
    let education_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=education'
    //let recreational_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=swimming'
        
    async function fetchImage() {
      try{
        let response = await fetch(education_url);
        let data = await response.json();
        console.log(data);
        data.results.forEach(item =>{
          source = item.urls.thumb
        })    
        setState(source);
        console.log(state);
      }
      catch(error){
        console.log(error);
      }
    }

    fetchImage();
  }

  useEffect(() => {
    unsplash();
  });

  return (
    
    <div style={{margin: 'auto' }}>
      <ImageList rowHeight={180}>
        <ImageListTile key="Subheader" cols={2} rows={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">I'm Bored</ListSubheader>
        </ImageListTile>
    
        <ImageListTile>
          <img
          src={state} alt="Educational"/>
          <ImageListTileBar
            title='Educational'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
              <InfoIcon />
              </IconButton>
            }
          />
        </ImageListTile>
        <ImageListTile>
          <img
          src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg" alt="Recreational"/>
          <ImageListTileBar
            title='Recreational'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
              <InfoIcon />
              </IconButton>
            }
        />
        </ImageListTile>
        <ImageListTile>
          <img
          src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg" alt="Social"/>
          <ImageListTileBar
            title='Social'   
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
              <InfoIcon />
              </IconButton>
            }
          />
        </ImageListTile>
        <ImageListTile>
          <img
          src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg" alt="DIY"/>
          <ImageListTileBar
            title='DIY'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListTile>
        <ImageListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg" alt="Charity"/>
          <ImageListTileBar
            title='Charity'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListTile>
        <ImageListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg" alt="Cooking"/>
          <ImageListTileBar
            title='Cooking'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListTile>
        <ImageListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg" alt="Busywork"/>
          <ImageListTileBar
            title='busywork'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListTile>
        <ImageListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg" alt="random"/>
          <ImageListTileBar
            title='random'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListTile>

      </ImageList>
    </div>
  );
}
 
export default GridUtil;