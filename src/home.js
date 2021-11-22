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
           imagesArray.push(item.urls.thumb);
                     
            }  
                
          )
      
       setState(imagesArray)
       console.log({state})
      
        })
    
      .catch((error)=>{
      console.error(error);
  })
},[url])
      
   
  return (
    <main style={{ padding: "1rem 0" }}>
      
  
     <div class='images'>
     {state.map((state) => (
        <img src={state} width='250' height='250' />
    ))}
     </div>
    </main>
  );
        
  };

    
  
