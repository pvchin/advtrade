import React from "react";
import { FeaturedProducts, Hero, Services, Contact, Intro } from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Intro />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
