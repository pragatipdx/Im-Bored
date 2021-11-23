import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Reeya_image from '../Images/Reeya_image.jpg';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.jpg';

function About() {
    return (
      <div className="About">
          <br/>
          <h2 className="text-center abouthead">
                <span className="border rounded p-2">
                    <b>About us</b>
                </span>
          </h2>
          <br/>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="max-auto card " style={{height: "28em"}}>
                    <div className="card-img">
                        <img src={Reeya_image} id="image1" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
                    </div>
                    <div className="card-body">
                      <h3>Reeya Kumbhojkar</h3>
                        <p>Computer Science Graduate student from PSU</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="max-auto card" style={{height: "28em"}}>
                  <div className="card-img">
                      <img src={image2} id="image2" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
                  </div>
                  <div className="card-body">
                      <h4>Pragati Rathore</h4>
                         <p>Computer Science Graduate student from PSU</p>
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="max-auto card" style={{height: "28em"}}>
                  <div className="card-img">
                      <img src={image3} id="image3" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
                  </div>
                  <div className="card-body">
                      <h5>Priyanka Sithamraju</h5>
                          <p>Computer Science Graduate student from PSU</p>
                      </div>
                  </div>
              </div>
            </div>
      </div>
    );
  }
  
  export default About;
