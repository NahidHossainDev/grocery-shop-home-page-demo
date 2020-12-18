import React from 'react';
import data from "./TopCategoryData"
const TopCategory = () => {
    return (
      <div className="container ">
        <div className="d-flex justify-content-between my-5">
          <h2 className="m-0">Top Category</h2>
          <button className="btn btn-success">View More</button>
        </div>
        <div className="row p-4">
          {data.map((d) => (
            <div className="col-md-6 ">
              <div className={`row ${d.border} d-flex align-items-center`}>
                <div className="col-4">
                  <img
                    src={d.img}
                    alt=""
                    style={{ height: "195px", width: "205px" }}
                  />
                </div>
                <div className="col-8">
                  <h4>{d.title}</h4>
                  <p>{d.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default TopCategory;