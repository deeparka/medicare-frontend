import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";

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
    <Container style={{ marginTop: "90px"}}>
      {getValue.cartItems.length <= 0 ? (
        <h2 id="cart-no-item-heading">No items in cart</h2>
      ) : (
        <div style={{ margintop: "20px" }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Cart items
          </h1>
          <Table id="productTable" striped bordered hover>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Medicine Name</th>
                <th>Quantity</th>
                <th>Price per unit</th>
              </tr>
            </thead>
            <tbody>
              {getValue.cartItems.map((item, index) => (
                <tr key={item.id}>
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
                  <td>
                    <Button
                      className="btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        getValue.removeItemsFromCart(item);
                      }}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <h4 style={{ textAlign: "right" }}>Total Price: {getValue.totalPrice}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        <Button
          className="btn-danger"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Previous
        </Button>
        <Button className="btn-success">Checkout</Button>
      </div>
    </Container>
  );
}

export default Cart;
