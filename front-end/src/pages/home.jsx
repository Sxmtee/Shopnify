import React from "react";
import { FaAngleUp } from "react-icons/fa";

import MyCard from "../components/card";
import MyCarousel from "../components/carousel";
import ProductCard from "../components/product_card";

const Home = () => {
  return (
    <div className="bg-light px-5">
      <section>
        <div className="row pt-5">
          <div className="col-12 col-md-4 col-lg-3">
            <MyCard
              no={0}
              img={require("../assets/cam360.png")}
              first="Next Gen"
              second="Video"
              third="with"
              fourth="360 Cam"
            />
            <MyCard
              no={1}
              img={require("../assets/iphone.png")}
              first="Top Rated"
              second="Gadgets"
              third="are on"
              fourth="Sale"
            />
            <MyCard
              no={2}
              img={require("../assets/earpiece.png")}
              first="Catch Big"
              second="Deals"
              third="on"
              fourth="Earbuds"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <MyCarousel />
          </div>
        </div>
      </section>
      <section>
        <div class="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
          <h2 class="h3 mb-0 pt-3 me-2">Trending products</h2>
          <div class="pt-3">
            <a class="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">
              More products<i class="ci-arrow-right ms-1 me-n1"></i>
            </a>
          </div>
        </div>
        <div class="row pt-2 mx-n2">
          <ProductCard
            img={require("../assets/headphones.jpg")}
            title="Headphones"
            product="Wireless Bluetooth Headphones"
          />
          <ProductCard
            img={require("../assets/smart-tv.jpg")}
            title="TV, Video & Audio"
            product="Smart TV LED 49 Ultra HD"
          />
          <ProductCard
            img={require("../assets/speaker.jpg")}
            title="Smart Home"
            product="Smart Speaker with Voice Control"
          />
          <ProductCard
            img={require("../assets/laptop.jpg")}
            title="Computers"
            product="Convertible 2-in-1 HD Laptop"
          />
        </div>
      </section>
      <span className="rounded-circle fixed-bottom to-top mb-5 bg-secondary text-center text-white">
        <FaAngleUp className="fs-4" />
      </span>
    </div>
  );
};

export default Home;
