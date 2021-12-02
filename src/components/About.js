import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Reeya_image from '../Images/reeya_image.jpg';
import Pragati_image from '../Images/pragati_image.jpg';
import Priyanka_image from '../Images/priyanka_image.JPG';

function About() {
    return (
      <div className="About">
          <div className="row p">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="d-flex justify-content-center aboutmain">
                <div className="card-body">
                  <p>
                    <b class = 'about-background'>CONTRIBUTORS</b>                  
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="max-auto card " style={{height: "30em"}}>
                <div className="card-img">
                  <img src={Reeya_image} id="image1" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
                </div>
                <div className="card-body">
                  <h3>Reeya Kumbhojkar</h3>
                    <p>Computer Science Graduate student from PSU</p>
                    </div>
                <div className="card-footer">
                  <a href="https://www.linkedin.com/in/reeyakumbhojkar5/" className="card-link">Linkedin</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="max-auto card" style={{height: "30em"}}>
                <div className="card-img">
                  <img src={Pragati_image} id="image2" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
                </div>
                <div className="card-body">
                  <h4>Pragati Rathore</h4>
                    <p>Computer Science Graduate student from PSU</p>
                </div>
                <div className="card-footer">
                  <a href="https://www.linkedin.com/in/pragatirathore/" className="card-link">Linkedin</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="max-auto card" style={{height: "30em"}}>
                <div className="card-img">
                  <img src={Priyanka_image} id="image3" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
                </div>
                <div className="card-body">
                  <h5>Priyanka Seethamraju</h5>
                    <p>Computer Science Graduate student from PSU</p>
                </div>
                <div className="card-footer">
                  <a href="https://www.linkedin.com/in/sai-priyanka-seethamraju-919532209/" className="card-link">Linkedin</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default About;
