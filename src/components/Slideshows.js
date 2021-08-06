import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshows.css";
import { Box, Image } from "@chakra-ui/react";

const slideImages = ["images/business-world.jpg", "images/home-world.jpg"];

const properties = {
  duration: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  indicators: true,
};
const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease" {...properties}>
        <div className="each-slide">
          <div
            style={{
              height: "40vw",
              backgroundImage: `url(${slideImages[0]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              height: "40vw",
              backgroundImage: `url(${slideImages[1]})`,
            }}
          ></div>
        </div>
        {/* <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div> */}
      </Slide>
    </div>
  );
};

export default Slideshow;
