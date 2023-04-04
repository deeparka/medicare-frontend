import React, { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  let cartItems = [];

//   const [userType, setUserType] = useState("");

  return (
    <AppContext.Provider value={{ cartItems }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
