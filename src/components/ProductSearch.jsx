import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MedicineDataService from "../services/medicine.service";
import { Button, Container, Table } from "react-bootstrap";
import AppContext from "../context/AppContext";

const ProductSearch = () => {
  const location = useLocation();
  const searchElement = location.state.name;

  const useValue = useContext(AppContext);

  const [medicine, setMedicine] = useState({});

  useEffect(() => {
    MedicineDataService.getMedicineByName(searchElement).then((response) => {
      setMedicine(response.data);
    //   console.log(response.data);
    });
  }, [searchElement]);

  const handleAddToCart = (medicine) => {
    if (useValue.cartItems.some((item) => item.id === medicine.id)) {
      alert("Already added to cart");
    } else {
      useValue.addItemsToCart(medicine);
      alert("Added to cart");
    }
    // console.log(useValue.cartItems);
  };

  return (
    <div>
      <Container style={{ marginTop: "90px", marginBottom: "50px" }}>
        <Table id="productTable" striped bordered hover>
          <thead>
            <tr>
              <th id="productTableHeads">Sl. No.</th>
              <th>
                <div id="productTableHeads">
                  <p>Medicine Name</p>
                </div>
              </th>
              <th>
                <div id="productTableHeads">
                  <p>Category</p>
                </div>
              </th>
              <th>
                <div>
                  <p>Price</p>
                </div>
              </th>
              <th id="productTableHeads">Buy</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>{medicine.name}</td>
              <td>{medicine.category}</td>
              <td>₹{medicine.price}</td>
              <td>
                <Button
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                      handleAddToCart(medicine);
                  }}
                >
                  Add to cart
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ProductSearch;
