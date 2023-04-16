import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import CartItem from "./CartItem";

function Cart() {
  const getValue = useContext(AppContext);

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // Redirect to the login page
      navigate("/login");
    }
  }, [navigate, token]);

  return (
    <Container style={{ marginTop: "90px" }}>
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
            <tbody>
              {getValue.cartItems.map((item, index) => (
                <CartItem item={item} index={index} />
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
        {/* Check Out */}
        {getValue.totalPrice === 0 ? (
          <Button disabled className="btn-success">
            Checkout
          </Button>
        ) : (
          <Button
            className="btn-success"
            onClick={(e) => {
              e.preventDefault();
              navigate("/address");
            }}
          >
            Checkout
          </Button>
        )}
      </div>
    </Container>
  );
}

export default Cart;
