import React, { useContext, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MedicineDataService from "../services/medicine.service";
import AppContext from "../context/AppContext";

function Products() {
  const navigate = useNavigate();

  const useValue = useContext(AppContext);

  const token = sessionStorage.getItem("token");

  if (!token) {
    // Redirect to the login page
    navigate("/login");
  }

  const [show, setShow] = useState(false);
  const [medicines, setMedicines] = useState([]);

  MedicineDataService.getAll().then((response) => {
    setMedicines(response.data);
    // console.log(response.data);
  });

  const handleAddToCart = (med) => {
    useValue.addItemsToCart(med);

    console.log(useValue.cartItems);
  };

  const handleClose = () => setShow(false);

  const handleEdit = ({ id, name, category, price }) => {
    navigate("/updateproduct", {
      state: {
        medId: id,
        medName: name,
        medCategory: category,
        medPrice: price,
      },
    });
  };

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
          {medicines.map((med, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{med.name}</td>
              <td>{med.category}</td>
              <td>₹{med.price}</td>
              <td>
                <Button
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(med);
                  }}
                >
                  Add to cart
                </Button>
              </td>
              <td>
                {useValue.userType === "user" ? (
                  <Button className="btn-secondary" disabled>
                    Edit
                  </Button>
                ) : (
                  <Button
                    className="btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEdit(med);
                    }}
                  >
                    Edit
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* If add to cart is clicked then this modal will pop-up */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Woohoo...🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body>product added to the cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue Shopping
          </Button>
        </Modal.Footer>
      </Modal>

      {/* If add to cart is clicked then this modal will pop-up */}
      {/* <Modal show={showError} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Error...😢</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please purchase another product or go to Cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Container>
  );
}

export default Products;
