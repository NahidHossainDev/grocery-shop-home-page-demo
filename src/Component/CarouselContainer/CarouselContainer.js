import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../Images/banner/banner1.jpg"
import Img2 from "../Images/banner/banner2.jpg";

const CarouselContainer = () => {
    return (
      <Carousel className="container carousel" >
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src={Img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src={Img2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default CarouselContainer;