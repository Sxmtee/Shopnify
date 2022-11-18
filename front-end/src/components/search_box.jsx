import React from "react";
import { BsSearch } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";

const SearchBox = () => {
  return (
    <div className="input-group mb-3 w-75 mx-auto">
      <div className="form-floating w-75">
        <input
          type="text"
          className="form-control border-warning"
          id="floatingInputGroup1"
          placeholder="Search for products"
        />
        <label htmlFor="floatingInputGroup1" className="text-muted">
          <BsSearch className="fs-5 me-2" />
          Search for products
        </label>
      </div>
      <Dropdown className="input-group-text w-25 bg-white">
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          All categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SearchBox;
