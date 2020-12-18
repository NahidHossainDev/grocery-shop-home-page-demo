import React from 'react';
import Slider from "react-slick";
import Img1 from "../Images/icons/review-1.png"
const Review = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
   };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
    return (
      <div className="text-center container-margin container py-5 review">
        <h2 className="my-5 ">THEY TRUST US</h2>
        <Slider {...settings}>
          <div>
            <p>
              Shipping Logistics is one of the top logistics providers in the
              industry. <br /> and first class customer service and live by the
              'Never Say <br />
              Never' attitude to accomplish every mission.
            </p>
            <img className="m-auto" src={Img1} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Review;