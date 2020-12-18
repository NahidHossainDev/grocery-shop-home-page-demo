import React from "react";
import ServiceData from "./ServicesData";
import ServiceMap from "./ServiceMap";
const Services = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between my-5">
        <h2 className="m-0">Services we offer</h2>
        <button className="btn btn-success">View More</button>
      </div>
      <div className="row d-flex justify-content-center">
        {ServiceData.map((d) => (
          <ServiceMap data={d}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
