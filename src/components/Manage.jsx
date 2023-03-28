import React from "react";

function Manage() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add medicine</h3>
          <div className="form-group mt-3">
            <label>Medicine Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g. Calpol"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Medicine image</label>
            <input
              type="file"
              className="form-control mt-1"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Price</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter price"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Manage;
