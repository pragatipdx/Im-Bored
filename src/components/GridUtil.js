import React , {ReactFragment} from 'react';
import {useState,useEffect,useCallback} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
 
const GridUtil = () => {


  let education_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=education'
  let recreational_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=swimming'
  let social_url='https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=friends'
  let diy_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=jigsaw'
  let charity_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=charity'
  let cooking_url='https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=cooking'
  let busywork_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=busy work'
  let random_url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=random'
  let [state,setState] = useState('')
  let url = 'https://api.unsplash.com/search/photos?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=education'
  let source= null
  const fetchData = ((url) =>{
    fetch(url)
   .then((response) =>  (response.json()))
   .then((data) => {

        data.results.forEach(item =>{
        source = item.urls.thumb
       
        })    
        setState(source)
       console.log(state)
    
    
      })
  
    .catch((error)=>{
    console.error(error);
})
  })


  const renderImages = (()=>{
return(
 <>
  <img
      
  src={state}/>
   <GridListTileBar
     title='Education'
     subtitle={<span>Activity Type</span>}
     actionIcon={
       <IconButton aria-label={`Best Place to learn`}>
         <InfoIcon />
       </IconButton>
     }
   />
   </>
)
})
  return (
    
    <div style={{margin: 'auto' }}>
      <GridList cellHeight={180} >
        <GridListTile key="Subheader" cols={2} rows={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">I'm Bored</ListSubheader>
        </GridListTile>
    
        <GridListTile>
        <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='Recreational'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='Recreational'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='Social'   
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='DIY'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='Charity'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='Cooking'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='busywork'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
         <img
         src="http://www.circ.biz/wp-content/uploads/2014/12/1406-sands-jacksonhole-whitewater-1972-circ.jpg"/>
          <GridListTileBar
            title='random'
            subtitle={<span>Activity Type</span>}
            actionIcon={
              <IconButton aria-label={`Best Place to learn`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>

      </GridList>
    </div>
  );
}
 
export default GridUtil;