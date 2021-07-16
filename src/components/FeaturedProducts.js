import React from "react";
import { Slide } from "react-slideshow-image";
import useReactMatchMedia from "react-simple-matchmedia";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const matchPhone = useReactMatchMedia("phone");
  const matchTablet = useReactMatchMedia("tablet");
  const match600 = useReactMatchMedia(
    "(min-width: 600px) and (max-width: 1800px)"
  );
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
  };

  const propertiesphone = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    indicators: true,
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>most sellable products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {match600 && (
          <Slide {...properties}>
            {featured.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </Slide>
        )}
        {matchTablet && (
          <Slide {...properties}>
            {featured.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </Slide>
        )}
        {matchPhone &&
          featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
