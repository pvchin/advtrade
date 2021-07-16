import { Slide } from "react-slideshow-image";
import styled from "styled-components";

const slideImages = [
  "products/smartlock-sm1.jpg",
  "products/smartlighting-sl1.jpg",
  "products/smartelec-se1.jpg",
];

const MultipleSlides = () => {
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <div style={style}>First Slide</div>
          {/* <div style={{ padding: '200px 0', backgroundImage: `url(${slideImages[0]})` }}> */}
          <div style={style}>
            <div className="container">
              <img src={slideImages[0]} alt="slide1" />
            </div>
            <span>Slide 1</span>
          </div>
          <div style={style}>Second Slide</div>
          <div style={style}>Third Slide</div>
          <div style={style}>Fourth Slide</div>
          <div style={style}>Fifth Slide</div>
          <div style={style}>sixth Slide</div>
          <div style={style}>Seventh Slide</div>
          <div style={style}>Eight Slide</div>
        </Slide>
      </div>
    </div>
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
export default MultipleSlides;
