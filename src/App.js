import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Manage from "./components/Manage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
