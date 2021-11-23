import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
 
const GridUtil = () => {
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
            title='Education'
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