import React, {useState} from "react";
import '../components/PageEffect.css';

export default function Test() {
    const [className, setclassName] = useState('container');

    return (
        <div class="main">
        <div className={className}>
            <div class="split left" onMouseEnter={()=>setclassName(className + " hover-left")} onMouseLeave={()=>setclassName("container")}>
                <h2>
                    Are you <strong>bored?</strong>
                </h2>
            </div>
            <div class="split right" onMouseEnter={()=>setclassName(className + " hover-right")} onMouseLeave={()=>setclassName("container")}>
                <h2>
                   We have come to <strong>Help</strong>
                </h2>
            </div>
        </div>
    
        <div class="credit">Explore 
            <a href="https://unsplash.com/@nhillier">Activity</a> on <a
                href="https://unsplash.com/">Our Dasboard</a>
            
        </div>
        </div>
    );
}



// import React, {useState} from "react";

// export default function ShowButtonHover() {
//     const [style, setStyle] = useState({display: 'none'});

//     return (
//         <div className="App">
//             <h2>Hidden Button in the box. Move mouse in the box</h2>
//             <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}
//                  onMouseEnter={e => {
//                      setStyle({display: 'block'});
//                  }}
//                  onMouseLeave={e => {
//                      setStyle({display: 'none'})
//                  }}
//             >
//                 <button style={style}>Click</button>
//             </div>
//         </div>
//     );
// }