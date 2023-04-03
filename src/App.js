import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Appointments from "./components/Appointments";
import Manage from "./components/Manage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Healthcaretest from "./components/Healthcaretest";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manageproduct" element={<Manage />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/healthcaretest" element={<Healthcaretest />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
