import React from 'react';
import starIcon from "../Images/icons/star.png"
const TopProductMap = ({ data }) => {
    const { off, img, detail, price, rating } = data;
    return (
      <div className="col-md-4 p-0 position-relative" style={{marginBottom:"150px"}}>
        <div className="card p-3 m-3 top-pro-card">
          <div className="row px-3">
            <small className="mr-auto">
              <strong className="bg-warning px-1 rounded">{off}% OFF</strong>
            </small>
            <div>
              <img src={starIcon} alt="" />
              <small className="ml-1">{rating}</small>
            </div>
          </div>
          <img src={img} alt="" className="pro-img" />
        </div>
        <div className="pro-detail">
          <p className="m-0">{detail}</p>
          <p className="m-0">{price}</p>
          <button className="add-btn">ADD</button>
          <button className="plus-btn">+</button>
        </div>
      </div>
    );
};

export default TopProductMap;