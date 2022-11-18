import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaAngleRight } from "react-icons/fa";

const MyCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Carousel.Caption>
          <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
            <h2 className="fw-light pb-1 from-bottom">World of music with</h2>
            <h1 className="display-4 from-bottom delay-1">Headphones</h1>
            <h5 className="fw-light pb-3 from-bottom delay-2">
              Choose between top brands
            </h5>
            <div className="d-table scale-up delay-4 mx-auto mx-md-0">
              <a className="btn btn-danger btn-shadow" href="#">
                Shop Now <FaAngleRight />
              </a>
            </div>
          </div>
        </Carousel.Caption>
        <img
          className="d-block w-50 float-end"
          src={require("../assets/headphone-on.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
            <h2 className="fw-light pb-1 from-start">Explore the best</h2>
            <h1 className="display-4 from-start delay-1">VR Collection</h1>
            <h5 className="fw-light pb-3 from-start delay-2">on the market</h5>
            <div className="d-table scale-up delay-4 mx-auto mx-md-0">
              <a className="btn btn-danger" href="#">
                Shop Now <FaAngleRight />
              </a>
            </div>
          </div>
        </Carousel.Caption>
        <img
          className="d-block w-50 float-end"
          src={require("../assets/vr.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
