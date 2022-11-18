import React from "react";
import { FaAngleRight } from "react-icons/fa";

const MyCard = (props) => {
  const cardBgs = [
    { txt: "text-info", bg: "alert-info" },
    { txt: "text-warning", bg: "alert-warning" },
    { txt: "text-success", bg: "alert-success" },
  ];

  return (
    <a
      className={`alert ${
        cardBgs[props.no].bg
      } border-0 d-flex align-items-center rounded card-text text-decoration-none text-dark pt-2 ps-2 mb-4 me-4 me-xl-0`}
      href="#"
      style={{ maxWidth: "17rem" }}
    >
      <img src={props.img} width="125" alt="Banner" />
      <div className="py-4 px-2">
        <h5 className="mb-2">
          {props.first}
          <br />
          <span className="fw-bold">{props.second}</span> {props.third}
          <br />
          <span className="fw-bold">{props.fourth}</span>
        </h5>
        <div className={`${cardBgs[props.no].txt} fw-bold`}>
          <small>Shop now</small>
          <FaAngleRight className="fs-xs ms-1" />
        </div>
      </div>
    </a>
  );
};

export default MyCard;
