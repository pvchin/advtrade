import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshows.css";
import { AspectRatio, Box, Image, Wrap, WrapItem } from "@chakra-ui/react";

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
      <Box display="block" position="relative">
        <AspectRatio w="100%" maxH="550px" ratio={4 / 3}>
          <Image
            w="800"
            src="https://res.cloudinary.com/dlmzwvakr/image/upload/v1634214131/advtrade/home-world_tnjubu.jpg"
            alt="image 1"
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Slide easing="ease" {...properties}>
        <div className="each-slide">
          <Box display="block" position="relative" h="550">
            <AspectRatio display="block" w="100%" maxH="550px" ratio={8 / 4}>
              <Image
                w="800"
                src={slideImages[0]}
                alt="image 0"
                objectFit="cover"
              />
            </AspectRatio>
          </Box>
        </div>
        {/* <div className="each-slide"> */}
        <Box display="block" position="relative" h="550">
          <AspectRatio display="block" w="100%" maxH="550px" ratio={8 / 4}>
            <Image
              w="800"
              src={slideImages[1]}
              alt="image 1"
              objectFit="cover"
            />
          </AspectRatio>
        </Box>
        {/* </div> */}
      </Slide>
    </div>
  );
};

export default Slideshow;
