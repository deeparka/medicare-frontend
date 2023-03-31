import React, { useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MedicineDataService from "../services/medicine.service";

function Products() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [medicines, setMedicines] = useState([]);

  MedicineDataService.getAll().then((response) => {
    setMedicines(response.data);
    // console.log(response.data);
  });

  const handleAddToCart = () => {
    setShow(true);
  }

  const handleClose = () => setShow(false);

  return (
    <Container>
      <h2 id="productHeading">
        Here are all the medicines available on our site
      </h2>
      <Table id="productTable" striped bordered hover>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Medicine Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Buy</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>1</td>
                <td>Paracetomol</td>
                <td>Allopathic</td>
                <td>25$</td>
                <td>Add to cart</td>
                <td>edit btn</td>
                </tr> */}
          {medicines.map((med, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{med.name}</td>
              <td>{med.category}</td>
              <td>{med.price}</td>
              <td>
                <Button className="btn-primary" onClick={handleAddToCart}>
                  Add to cart
                </Button>
              </td>
              <td>
                <Link to="/manageproduct">
                  <Button className="btn-secondary">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* If add to cart is clicked then this modal will pop-up */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Added to cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo! product added to the cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue Shopping
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}

export default Products;
