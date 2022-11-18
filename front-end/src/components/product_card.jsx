import React from "react";
import { BsHeart, BsCart3, BsStar } from "react-icons/bs";

const ProductCard = ({img, title, product}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
      <div className="card border-0 shadow p-3">
        <div className="d-flex align-items-center justify-content-between">
          <a className="text-decoration-none text-secondary me-2" href="#">
            Compare
          </a>
          <button
            className="btn-light float-end rounded-circle border-0 btn-sm p-1"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Add to wishlist"
            data-bs-original-title="Add to wishlist"
          >
            <BsHeart className="text-secondary m-2" />
          </button>
        </div>
        <a className="text-decoration-none d-block overflow-hidden" href="#">
          <img
            src={img}
            alt="Product"
            className="img-fluid"
          />
        </a>
        <div className="card-body py-2">
          <a
            className="text-decoration-none text-secondary d-block fs-xs pb-1"
            href="#"
          >
            {title}
          </a>
          <h5>{product}</h5>
          <div className="d-flex justify-content-between">
            <div>
              <span className="text-accent">₦198.00</span>
            </div>
            <div>
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </div>
          </div>
        </div>
        <div className="card-body">
          <button
            className="btn btn-danger btn-sm d-block w-100 mb-2"
            type="button"
          >
            <BsCart3 /> Add to Cart
          </button>
          <div className="text-center">
            <a
              className="text-decoration-none text-secondary fs-ms"
              href="#quick-view-electro"
              data-bs-toggle="modal"
            >
              <i className="ci-eye align-middle me-1"></i>Quick view
            </a>
          </div>
        </div>
      </div>
      <hr className="d-sm-none" />
    </div>
  );
};

export default ProductCard;
