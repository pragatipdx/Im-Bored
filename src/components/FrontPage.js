import React , {useState,useEffect,useCallback} from 'react';


export default function Home() {

    let url = 'https://api.unsplash.com/photos/random?client_id=XVkqfP4oGQXxceYU3rJi2GIwtaAHPhCwosw1PdjOv7I&query=gardening,swimming,card game,dance,write a poem,jigsaw puzzle,roller skate,cooking,photos with friends,watch a movie,picnic&count=10';
    let [state,setState] =useState([])
    let imagesArray = new Array();
    useEffect(() =>{
      fetch(url)
     .then((response) =>  (response.json()))
     .then((data) => {
     
       
        data.forEach(item =>{
           imagesArray.push(item.urls.small);
                     
            }  
                
          )
   
       setState(imagesArray)
      

        })
    
      .catch((error)=>{
      console.error(error);
  })
},[url])
      
 
  return (
    <main style={{ padding: "1rem 0" }}>
      
  
     <div class='grid-container'>
   
       <img id ="image1" src={state[0]} height="310" width="150"/>
    
       <img id ="image2" src={state[1]} height="150" width="150"/>
   
       <img id ="image3" src={state[2]} height="150" width="150"/>
       
        <div id ="image4">
       <img  src={state[3]} height="150" width="310"/>
       </div>
       <div id ="image5">
       <img  src={state[4]} height="150" width="310"/>
       
       </div>
       <div id ="image6">
           <img  src={state[5]} height="150" width="150"/>
           </div>
           <div id ="image7">
       <img src={state[6]} height="150" width="150"/>
       </div>
       <div id ="image8">
       <img  src={state[7]} height="310" width="150"/>
       </div>
       <div id ="image9">
       <img  src={state[8]} height="310" width="150"/>
       </div>
       <div id ="image10">
       <img  src={state[9]} height="150" width="150"/>
</div> 
     </div>
    </main>
  );
        
  };