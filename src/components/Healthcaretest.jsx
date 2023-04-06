import React from "react";

const Healthcaretest = () => {
  const handleScheduleTest = () => {};

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleScheduleTest}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Book your healthcare test today</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g John Doe"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Mobile Number</label>
            <input
              type="emailnumber"
              className="form-control mt-1"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Pincode</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter your pincode"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Choose Test</label>
            <select className="form-select mt-1" name="test" id="test">
              <option value="completeHemogram">Complete Hemogram</option>
              <option value="liverProfile">Liver Profile</option>
              <option value="diabetes">Diabetes</option>
              <option value="lipidProfile">Lipid Profile</option>
              <option value="thyroidProfile">Thyroid Profile</option>
              <option value="ironDeficiency">Iron Deficiency</option>
              <option value="vitamin">Vitamin</option>
              <option value="pathology">Pathology</option>
              <option value="testosterone">Testosterone</option>
              <option value="kidneyFunctionTest">Kidney Function Test</option>
              <option value="cardiology">Cardiology</option>
              <option value="radiology">Radiology</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Schedule Test
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Healthcaretest;
