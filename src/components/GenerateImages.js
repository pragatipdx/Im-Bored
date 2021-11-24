  
import React , {ReactFragment} from 'react';
import {useState,useEffect,useCallback} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { ImageListItemBar } from '@material-ui/core'

import GridUtil from './GridUtil';
 
  
  const GenerateImages = (props)=> {
 

    let url = props
    console.log('wswx',url)

    let [state,setState] = useState([])
    
  
       
    fetch(url.data)
    .then((response) =>  (response.json()))
    .then((data) => {
        console.log(data,'pri')
         setState(data.results[0].urls.thumb) 


       })
   
     .catch((error)=>{
     console.error(error);
 })
   
    return( 
        <>
        <img
        src={state}/>
         <GridListTileBar
           title='Recreational'
           subtitle={<span>Activity Type</span>}
           actionIcon={
             <IconButton aria-label={`Best Place to learn`}>
               <InfoIcon />
             </IconButton>
           }
         />
       </>
    
  )

}
export default GenerateImages