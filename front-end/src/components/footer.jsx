import React from "react";
import { Table, Form, InputGroup, FloatingLabel } from "react-bootstrap/";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Table responsive borderless variant="dark" className="w-75 mx-auto">
        <thead>
          <tr>
            <th>Shop departments</th>
            <th>Account & shipping info</th>
            <th>Stay informed</th>
          </tr>
        </thead>
        <tbody className="text-light">
          <tr>
            <td>Sneakers & Athletic</td>
            <td>Your account</td>
            <td rowSpan={2}>
              <InputGroup className="mb-3 w-50">
                <Form.Control type="text" placeholder="Your email" />
                <InputGroup.Text
                  className="bg-danger text-white w-50 fw-bold border-0"
                  id="basic-addon2"
                >
                  <FiMail className="fs-5 me-2" />
                  Subscribe*
                </InputGroup.Text>
              </InputGroup>
            </td>
          </tr>
          <tr>
            <td>Athletic Apparel</td>
            <td>Shipping rates & policies</td>
          </tr>
          <tr>
            <td>Sandals</td>
            <td>Refunds & replacements</td>
            <td className="text-secondary">
              *Subscribe to our newsletter to receive early discount offers,{" "}
              <br />
              updates and new products info.
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mx-5" />
      <p className="text-center">&copy; PMT Fellowship 2022</p>
    </footer>
  );
};

export default Footer;
