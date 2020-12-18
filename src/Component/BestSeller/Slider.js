import React from "react"
import Carousel from "react-elastic-carousel";
import Data from "./BestSellData"
import BestSellerCard from "./BestSellerCard";
const Slider = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1, },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
        { width: 1260, itemsToShow: 5 }
      ]
    return (
      <div>
        <Carousel breakPoints={breakPoints} pagination = {false}>
          {Data.map((d, i) => (
            <BestSellerCard key={i} data={d}></BestSellerCard>
          ))}
        </Carousel>
      </div>
    );
};
export default Slider