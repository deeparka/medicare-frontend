import React, { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [userType, setUserType] = useState("");

  function addItemsToCart(item) {
    setCartItems([...cartItems, item]);
    // console.log(cartItems);
  }

  function removeItemsFromCart(item) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((prevItem) => prevItem.id !== item.id);
    });
  }

  function calculateTotalPrice(price) {
    let newPrice = totalPrice + price;
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
