import React from 'react';

const ArticlesCart = ({img, title, date, detail}) => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="p-2">
            <img src={img} alt="" />
            <h5>{title}</h5>
            <small className="text-warning">{date}</small>
            <p>{detail}</p>
            <span className="text-success">Read More</span>
          </div>
        </div>
      </div>
    );
};

export default ArticlesCart;