import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import introImg from "../assets/imgs/Powerfulsmarthomesystem.jpeg";
import introImg2 from "../assets/imgs/productcenter.jpeg";
import { AspectRatio, Heading, Text} from "@chakra-ui/react"

const Intro = () => {
  return (
    <main>
      {/* <PageHero title="about" /> */}
      <Wrapper className="page section section-center">
        <AspectRatio display="block" w="100%" maxH="550px" ratio={8 / 4}>
        <img src={introImg} alt="nice desk" />
        </AspectRatio>
        <AspectRatio display="block" w="100%" maxH="550px" ratio={8 / 4}>
        <img src={introImg2} alt="nice desk" />
        </AspectRatio>
        <article>
          <div className="title">
            <Heading size="xl">Full Smart Solutions</Heading>
            <div className="underline"></div>
          </div>
          <Text fontSize="25">To build smart life, homes, offices & businesses</Text>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Intro;
