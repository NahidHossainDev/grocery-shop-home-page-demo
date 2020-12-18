import React from 'react';
import banner1 from "../Images/banner/banner3.jpg"
import banner2 from "../Images/banner/banner4.jpg"
import banner3 from '../Images/banner/banner5.jpg'
import Slider from './Slider';

const Banner = [banner1, banner2, banner3]
const BestSeller = () => {
    return (
      <div className="container">
        <div className="d-flex justify-content-between mb-5">
          <h2 className="m-0">BEST SELLER</h2>
          <button className="btn btn-success">View More</button>
        </div>
        <Slider />
        <div className="row my-5 p-3" style={{ backgroundColor: "#f6f9ff" }}>
          {Banner.map((d, i) => (
            <div className="col-md-4 p-0">
              <img src={d} alt=""
                style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default BestSeller;