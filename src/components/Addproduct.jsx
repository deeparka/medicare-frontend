import React, { useState } from "react";
import MedicineDataService from "../services/medicine.service";
import { Link } from "react-router-dom";

const Addproduct = () => {
  const initialMedicineState = {
    id: null,
    name: "",
    category: "",
    price: "",
  };

  const [medicine, setMedicine] = useState(initialMedicineState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicine({ ...medicine, [name]: value });
  };

  function handleMedicineSubmit() {
    let data = {
      name: medicine.name,
      category: medicine.category,
      price: medicine.price,
    };

    MedicineDataService.create(data)
      .then((response) => {
        setMedicine({
          id: response.data.id,
          name: response.data.name,
          category: response.data.category,
          price: response.data.price,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="Auth-form-container">
      {submitted ? (<div>
          <h2>Product added successfully</h2>
          <h4 style={{ textAlign: "center" }}>
            <Link to="/login">Add another Product</Link>
          </h4>
        </div>) :
      (<form className="Auth-form" onSubmit={handleMedicineSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Add medicine</h3>

        <div className="form-group mt-3">
          <label>Medicine Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="e.g. Calpol"
            required
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group mt-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Enter price"
            required
            onChange={handleInputChange}
            name="price"
          />
        </div>

        <div className="form-group mt-3">
          <label>Category</label>
          <select
            onChange={handleInputChange}
            className="form-select mt-1"
            name="category"
            id="category"
          >
            <option value="#" selected>
              ------------- Select category -------------
            </option>
            <option value="allopathic">Allopathic</option>
            <option value="ayurvedic">Ayurvedic</option>
            <option value="Homeopathic">Homeopathic</option>
          </select>
        </div>

        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>)}
    </div>
  );
};

export default Addproduct;
