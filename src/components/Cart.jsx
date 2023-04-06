import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

function Cart() {
  const getValue = useContext(AppContext);

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(0);

  const token = sessionStorage.getItem("token");

  if (!token) {
    // Redirect to the login page
    navigate("/login");
  }

  console.log(getValue.cartItems);

  function handleQuantityChange(event) {
    const { value } = event.target;

    setQuantity(value);
  }

  return (
    <Container>
      {getValue.cartItems.length <= 0 ? (
        <h2 id="cart-no-item-heading">No items in cart</h2>
      ) : (
        <Table id="productTable" striped bordered hover>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Price per unit</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {getValue.cartItems.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control mt-1"
                      placeholder="Quantity"
                      onChange={handleQuantityChange}
                      name="quantity"
                      required
                    />
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Cart;
