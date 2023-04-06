import React, { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);

  const [userType, setUserType] = useState("");

  function addItemsToCart(item) {
    setCartItems([...cartItems, item]);
    console.log(cartItems);
  }

  function removeItemsFromCart(item) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((prevItem) => prevItem.id !== item.id);
    });
  }

  function defineUserType(user) {
    setUserType(user);
    console.log(user)
    console.log(userType);
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
        userType,
        defineUserType,
        logOut
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
