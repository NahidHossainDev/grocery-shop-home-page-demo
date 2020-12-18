import React from 'react';
import Video1 from "./FRUIT_1.mp4"
import leftQuote from "../Images/icons/left-quote.png"
const Video = () => {
    return (
      <div className="container">
        <div className=" container-margin">
          <h2>Promotional Video</h2>
          <div className="row my-5">
            <div className="col-md-6 d-flex justify-content-center">
              {/* <iframe
              src="https://player.vimeo.com/video/491579999"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe> */}
              <video
                src={Video1}
                height="350px"
                width="600px"
                controls
                autoPlay
                muted
              />
            </div>
            <div className="col-md-6 video-detail d-flex align-items-center p-5">
              <div>
                <img src={leftQuote} alt="" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                eiusmod tempor incididunt ut labore etu dolore magna aliqua enim
                veniam quis nostrud exercitate ullamco laboris nisi aliqua.
                <img src={leftQuote} className="right-quote" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Video;