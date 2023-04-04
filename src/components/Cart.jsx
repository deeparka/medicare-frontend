import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Cart() {
  const getValue = useContext(AppContext);

  console.log(getValue.cartItems);
  
  return (
    <div>
      {getValue.cartItems.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}

export default Cart;
