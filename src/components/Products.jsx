import React, { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
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

  const [medicines, setMedicines] = useState([]);

  MedicineDataService.getAll().then((response) => {
    setMedicines(response.data);
    // console.log(response.data);
  });

  const handleAddToCart = (med) => {

    if (useValue.cartItems.some(item => item.id === med.id)) {
      alert("Already added to cart");
    } else {
      useValue.addItemsToCart(med);
      alert("Added to cart")
    }

    // console.log(useValue.cartItems);
  };

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
    </Container>
  );
}

export default Products;
