import React, { useState } from "react";
import MedicineDataService from "../services/medicine.service";
import { useLocation } from "react-router-dom";

const Updateproduct = () => {
  const location = useLocation();
  const { medId, medName, medCategory, medPrice } = location.state;

  const initialMedicineState = {
    id: medId,
    name: medName,
    category: medCategory,
    price: medPrice,
  };

  const [medicine, setMedicine] = useState(initialMedicineState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicine({ ...medicine, [name]: value });
  };

  function handleMedicineSubmit(event) {
    event.preventDefault();
    let data = {
      id: medId,
      name: medicine.name,
      category: medicine.category,
      price: medicine.price,
    };

    MedicineDataService.update(medId, data)
      .then((response) => {
        setMedicine({
          id: response.data.id,
          name: response.data.name,
          category: response.data.category,
          price: response.data.price,
        });
        setSubmitted(true);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="Auth-form-container">
      {submitted ? (
        <div>
          <h2>Product updated successfully</h2>
        </div>
      ) : (
        <form className="Auth-form" onSubmit={handleMedicineSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Update medicine</h3>

            <div className="form-group mt-3">
              <label>Medicine Id</label>
              <input
                disabled
                type="text"
                className="form-control mt-1"
                placeholder={medId}
              />
            </div>

            <div className="form-group mt-3">
              <label>Medicine Name*</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder={medName}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group mt-3">
              <label>Price*</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder={medPrice}
                onChange={handleInputChange}
                name="price"
              />
            </div>

            <div className="form-group mt-3">
              <label>Category*</label>
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
                Update
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Updateproduct;
