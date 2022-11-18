import React from "react";
import { BsPerson, BsCart3 } from "react-icons/bs";

const CompoundMenu = (props) => {
  return (
    <div
      className="d-flex align-items-center cursor-pointer"
      onClick={props.onClickMenu}
    >
      {props.isCart ? (
        <div className="bg-light rounded-circle position-relative p-2 cart-icon me-2">
          <span className="position-absolute top-0 start-100 translate-middle-x bg-danger text-white cart-text rounded-circle">
            {props.noItem}
          </span>
          <BsCart3 className="text-secondary position-absolute top-50 start-50 translate-middle fs-5" />
        </div>
      ) : (
        <BsPerson className="text-secondary fs-5" />
      )}
      <div className="d-block">{props.children}</div>
    </div>
  );
};

export default CompoundMenu;
