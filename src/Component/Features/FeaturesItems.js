import React from 'react';

const FeaturesItems = ({icon, title, p, border}) => {
    return (
      <div className="col-md-2 mx-3 my-3">
        <div className={`row features-item ${border} d-flex align-items-center`}>
          <div className="col-3">
            <img src={icon} alt="" />
          </div>
          <div className="col-9 pl-4">
            <h5>{title}</h5>
            <small>{p}</small>
          </div>
        </div>
      </div>
    );
};

export default FeaturesItems;