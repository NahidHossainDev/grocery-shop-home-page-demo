import React from 'react';
import FeaturesItems from './FeaturesItems';
import Banner2 from "../Images/banner/banner2.jpg"
import features from "./FeaturesData"

const Features = () => {
    return (
      <div className="container mb-5">
        <div className="row my-3 d-flex justify-content-center">
          {features.map((d) => (
            <FeaturesItems icon={d.i} title={d.title} p={d.p} border={d.border} />
          ))}
        </div>
          <img src={Banner2} alt="" width="100%"/>
      </div>
    );
};

export default Features;