import React from 'react';
import ArticlesData from "./ArticlesData"
import ArticlesCart from './ArticlesCart';
const Articles = () => {
    return (
      <div className="container">
        <div className=" container-margin">
          <div className="d-flex justify-content-between mb-5">
            <h2 className="m-0">Latest Articles</h2>
            <button className="btn btn-success">View More</button>
          </div>
          <div className="row articles">
            {ArticlesData.map((d) => (
              <ArticlesCart
                img={d.img}
                title={d.title}
                date={d.date}
                detail={d.detail}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Articles;