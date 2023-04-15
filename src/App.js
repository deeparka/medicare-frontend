import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Appointments from "./components/Appointment";
import AppointmentForm from "./components/AppointmentForm";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Cares from "./components/Cares";
import Healthcaretest from "./components/Healthcaretest";
import Healthconcern from "./components/Healthconcern";
import Wellness from "./components/Wellness";
import Addproduct from "./components/Addproduct";
import Updateproduct from "./components/Updateproduct";
import ProductSearch from "./components/ProductSearch";

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/updateproduct" element={<Updateproduct />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointmentform" element={<AppointmentForm />} />
          <Route path="/healthcaretest" element={<Healthcaretest />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/healthconcern" element={<Healthconcern />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsearch" element={<ProductSearch />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cares" element={<Cares />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
