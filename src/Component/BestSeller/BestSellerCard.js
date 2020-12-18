import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRupeeSign,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import starIcon from "../Images/icons/star.png";
import { useState } from "react";
import { useContext } from "react";
import { ContextElement } from "../../App";

const BestSellerCard = ({ data }) => {
  const { off, img, detail, price, rating, id } = data;

  // const [addToCart, setAddToCart] = useContext(ContextElement)

  const [addCart, setAddCart] = useState(false);
  const [proCount, setProCount] = useState(0);

  // const addProductToCard = (id, count) => {
    
  // }
  return (
    <div className="card best-seller-card">
      <div className="row px-3">
        <small className="mr-auto">
          <strong className="bg-warning px-1 rounded">{off}% OFF</strong>
        </small>
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => setAddCart(addCart ? false : true)}
            className={addCart ? "heart-red" : "heart-default"}
          />
        </div>
      </div>
      <img src={img} alt="" className="m-auto" />
      <h6>{detail}</h6>

      <div className="row px-3 ">
        <small className="mr-auto">
          <FontAwesomeIcon icon={faRupeeSign} />
          <strong>{price}</strong>
        </small>
        <div>
          <img src={starIcon} alt="" />
          <small className="ml-1">{rating}</small>
        </div>
      </div>

      {/* Button Operation */}
      <div className="row m-auto text-light">
        {(proCount > 0) && (addCart === false) ? (
          <div style={{ width: "130px", backgroundColor: "lightGray" }}>
            <button
              className="btn bg-success"
              onClick={() => setProCount(proCount - 1)}
            >
              -
            </button>
            <span className="pl-4 text-success">{proCount}</span>
          </div>
        ) : (
          <button
            className={addCart ? "bg-success add-btn" : "add-btn"}
            onClick={() => setAddCart(true)}
          >
            {addCart ? "Item Added" : "Add"}
          </button>
        )}

        <button
          className={proCount > 0 ? "btn bg-success" : "plus-btn"}
          onClick={() => setProCount(proCount + 1)}
          style={addCart ? { backgroundColor: "green" } : {}}
          disabled={addCart === true}
        >
          {addCart ? (
            <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
          ) : (
            "+"
          )}
        </button>
      </div>
    </div>
  );
};

export default BestSellerCard;
