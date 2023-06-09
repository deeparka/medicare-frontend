import React, { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [userType, setUserType] = useState("");

  let newPrice = 0;

  function addItemsToCart(item) {
    setCartItems([...cartItems, item]);
    // console.log(cartItems);
  }

  function removeItemsFromCart(item, quantity) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((prevItem) => prevItem.id !== item.id);
    });

    setTotalPrice(totalPrice - (item.price * quantity))
  }

  function calculateTotalPrice(price) {
    newPrice = totalPrice + price;
    setTotalPrice(newPrice);
  }

  function defineUserType(user) {
    setUserType(user);
    // console.log(user);
    // console.log(userType);
  }

  function logOut() {
    setUserType("");
  }

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addItemsToCart,
        removeItemsFromCart,
        totalPrice,
        calculateTotalPrice,
        userType,
        defineUserType,
        logOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
