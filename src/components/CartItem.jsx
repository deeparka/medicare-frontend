import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Button } from "react-bootstrap";

const CartItem = (props) => {
  const getValue = useContext(AppContext);

  const [quantity, setQuantity] = useState(0);

  function handleQuantityChange(event) {
    const { value } = event.target;

    setQuantity(value);
  }

  return (
    <div
      key={props.item.id}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <span>{props.index + 1}</span>

      <p>{props.item.name}</p>

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

      <p>Price: {props.item.price}</p>
      <p>Total: {quantity * props.item.price}</p>

      <div>
        <Button
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            getValue.calculateTotalPrice(props.item.price * quantity);
          }}
        >
          Add Price
        </Button>
      </div>
      <div>
        <Button
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            getValue.removeItemsFromCart(props.item, quantity);
          }}
        >
          Remove
        </Button>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
