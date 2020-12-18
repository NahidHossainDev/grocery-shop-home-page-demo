import React from "react";
import LocationIcon from "../Images/icons/locaion_icon.png";
import DownArrow from "../Images/icons/down-arrow-icon.png";
import CallIcon from "../Images/icons/call_icon.png";
const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="container ">
          <div className="d-flex">
            <div className="mr-auto">Free Delivery on order above Rs 499 </div>
            <div className="border-right">
              <img className="px-2" src={LocationIcon} alt="" />
              110022 New Delhi
              <img className="px-3" src={DownArrow} alt="" />
            </div>
            <div>
              <img className="px-2" src={CallIcon} alt="" />
              +91 - 9811415587
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
