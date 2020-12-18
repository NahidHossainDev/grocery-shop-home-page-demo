import React from 'react';
import ProductsData from "./ProductsData"
import TopProductMap from './TopProductMap';
import banner1 from "../Images/banner/banner6.jpg"
import banner2 from "../Images/banner/banner7.jpg";

const TopProducts = () => {
    return (
      <div className="my-5 container ">
            <h2 className="text-center">Top Products</h2>
            <div className="row">
                {ProductsData.map(d => <TopProductMap data={d} />)}
            </div>
            <div className="row my-5 p-3 " style={{ backgroundColor: "#f6f9ff" }}>
                <div className="col-md-6 p-0"><img src={banner1} alt="" style={{ width: "100%", height: "100%" }} /></div>
                <div className="col-md-6 p-0"><img src={banner2} alt="" style={{width:"100%",height:"100%"}}/></div>
            </div>
      </div>
    );
};

export default TopProducts;