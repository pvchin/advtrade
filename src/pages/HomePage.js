import React from "react";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Intro,
  Slideshow,
  MultipleSlides,
} from "../components";
const HomePage = () => {
  return (
    <main>
      {/* <Hero /> */}
      <Slideshow />
      <FeaturedProducts />
      <Intro />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
