import React, { useState } from "react";

function Address() {
  const initialAddresssState = {
    house: "",
    street: "",
    postOffice: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  };

  const [address, setAddress] = useState(initialAddresssState);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Your order has been placed successfully..🎊");
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Fill your address</h3>
          <div className="form-group mt-3">
            <label>House/ Flat name/ no*</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter House no or name"
              required
              onChange={handleFormChange}
              name="house"
            />
          </div>
          <div className="form-group mt-3">
            <label>Street*</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter street"
              required
              onChange={handleFormChange}
              name="street"
            />
          </div>
          <div className="form-group mt-3">
            <label>Post Office*</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter P.O."
              required
              onChange={handleFormChange}
              name="postOffice"
            />
          </div>
          <div className="form-group mt-3">
            <label>City*</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter city"
              required
              onChange={handleFormChange}
              name="city"
            />
          </div>
          <div className="form-group mt-3">
            <label>State*</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter state"
              required
              onChange={handleFormChange}
              name="state"
            />
          </div>
          <div className="form-group mt-3">
            <label>Country*</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter country"
              required
              onChange={handleFormChange}
              name="country"
            />
          </div>
          <div className="form-group mt-3">
            <label>Pincode*</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter pincode"
              required
              onChange={handleFormChange}
              name="pincode"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Address;
