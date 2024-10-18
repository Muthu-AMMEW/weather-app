import './Weather.css';
import { useState, useEffect } from "react";
export default function Weather() {


  return (
    <>
      <div className="row min-vw-100 min-vh-100 justify-content-center align-items-center bg-info-subtle">
        <div className="col-11 col-sm-8 col-md-7 col-lg-6 col-xl-5">
          <div className="bg-white d-flex flex-column justify-content-center align-items-center w-100">

            <div className="d-flex form-control border-danger w-75 m-3">
              <input className="mm-inputfocus flex-grow-1 border-0" type="text" name="" id="" placeholder="Enter City Name" />
              <i className="bi bi-search"></i>
            </div>

            <img src="./pictures/clear_sky.png" alt="" style={{ width: "100px", height: "100px" }} />
            <div>
              <h2>33C</h2>
            </div>
            <div>
              <h2>Test</h2>
            </div>
            <div>
              <h6>IN</h6>
            </div>

            <div className="d-flex w-100 justify-content-around">
              <div className="text-center">
                <h6>Latitude</h6>
                <div>value</div>
              </div>
              <div className="text-center">
                <h6>Longitude</h6>
                <div>value</div>
              </div>
            </div>

            <div className="d-flex w-100 justify-content-around m-3">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-droplet-half"></i>
                <div>31%</div>
                <h6>humidity</h6>
              </div>
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-speedometer2"></i>
                <div>1.54</div>
                <h6>Wind Speed</h6>
              </div>
            </div>
            
            <p>Designed by <a href="https://www.linkedin.com/in/muthu-ammew" className="text-success text-decoration-none fw-bolder">Muthu</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
