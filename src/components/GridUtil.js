import React , {ReactFragment} from 'react';
import {useState,useEffect,useCallback} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { ImageListItemBar } from '@material-ui/core'
import GenerateImages from "./GenerateImages"
 

let urls = new Array();
let image_urls = new Array();
const GridUtil = () => {

 


  let education_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=education'
  let recreational_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=swimming'
  let social_url='https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=friends'
  let diy_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=jigsaw'
  let charity_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=charity'
  let cooking_url='https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=cooking'
  let busywork_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=busy work'
  let random_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=random'

  
  urls.push(education_url,recreational_url,social_url,diy_url,charity_url,cooking_url,busywork_url,random_url)
  
  
  return (
    
    <div style={{margin: 'auto' }}>
    <GridList cellHeight={180} >
      <GridListTile key="Subheader" cols={2} rows={4} style={{ height: 'auto' }}>
        <ListSubheader component="div">I'm Bored</ListSubheader>
      </GridListTile>
       <GridListTile>
      <GenerateImages data={education_url}/>
      </GridListTile>
      <GridListTile>
        
       <GenerateImages data={recreational_url}/>
       
      </GridListTile>
      <GridListTile>
        <GenerateImages data={social_url}/>
      </GridListTile>
      <GridListTile>
   
        <GenerateImages data={diy_url}/>
      </GridListTile>
      <GridListTile>
       <GenerateImages data={charity_url}/>
      </GridListTile>
      <GridListTile>
      <GenerateImages data={cooking_url}/>
      </GridListTile>
      <GridListTile>
       <GenerateImages data={busywork_url}/>
      </GridListTile>
      <GridListTile>
       <GenerateImages data={random_url}/>
      </GridListTile>
     
      

    </GridList>
  </div>
  );
}
 
 
export default GridUtil;