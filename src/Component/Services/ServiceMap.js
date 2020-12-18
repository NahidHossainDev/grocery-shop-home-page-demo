import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ServiceMap = ({ data }) => {
    const { title, detail, img, star, rating } = data

  return (
    <div className="card text-center p-2 service-card m-2">
      <div
        style={{
          backgroundImage: `url('${img}')`,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
        }}
        className="star-container"
      >
        <div className="mx-auto p-3 star">
          {star.map((d, i) => (
            <FontAwesomeIcon
              icon={faStar}
              className={rating <= i ? "star-clr" : "star-rating-clr"}
              key={i}
            />
          ))}
        </div>
      </div>
      <h5 className="card-title">{title}</h5>
      <p>{detail}</p>
    </div>
  );
};

export default ServiceMap;
