import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AspectRatio, Box, Image, Wrap, WrapItem } from "@chakra-ui/react";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      {/* <div className="container">
        <Image boxSize="200px" objectFit="cover" src={image} alt={name} />
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div> */}
      <Box boxSize="300" h="300">
        {/* <AspectRatio maxW="280px" ratio={1}> */}
        <AspectRatio display="block" w="300px" h="300px" ratio={1}>
          <Wrap w="300px" h="300px" px="1rem" spacing={4} justify="center">
            <WrapItem
              w="95%"
              h="95%"
              boxShadow="base"
              rounded="20px"
              overflow="hidden"
              bg="white"
              lineHeight="0"
              _hover={{ boxShadow: "dark-lg" }}
            >
              <Image
                src={image}
                fallbackSrc="https://via.placeholder.com/150"
                alt={name}
                width="100%"
                display="block"
                objectFit="cover"
              />
            </WrapItem>
          </Wrap>
        </AspectRatio>
      </Box>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
