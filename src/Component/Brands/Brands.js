import React from "react";
import logo1 from "../Images/brand-logos/amul.png";
import logo2 from "../Images/brand-logos/dabur.png";
import logo3 from "../Images/brand-logos/bnjli.png";
import logo4 from "../Images/brand-logos/lays.png";
import logo5 from "../Images/brand-logos/britania.png";
import logo6 from "../Images/brand-logos/surf-excel.png";
import logo7 from "../Images/brand-logos/haldirams.png";
import logo8 from "../Images/brand-logos/himaliya.png";
import logo9 from "../Images/brand-logos/nestle.png";
import logo10 from "../Images/brand-logos/parle.png";

const BrandsImg = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10]


const Brands = () => {
  return (
    <div className="container">
      <div className="container-margin">
        <div className="d-flex justify-content-between mb-5">
          <h2 className="m-0">SHOP BY BRANDS</h2>
          <button className="btn btn-success">View More</button>
        </div>
        <div className="row my-3 d-flex justify-content-center">
          {BrandsImg.map((d) => (
            <BrandItem logo={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BrandItem = ({ logo }) => {
  return (
    <div className="col-md-2 mx-3 my-3 d-flex align-items-center justify-content-center">
        <img src={logo} alt="" />
    </div>
  );
};

export default Brands;
