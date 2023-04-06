import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Healthcaretest = () => {
  const navigate = useNavigate();

  const [test, setTest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const token = sessionStorage.getItem("token");

  if (!token) {
    // Redirect to the login page
    navigate("/login");
  }

  const handleScheduleTest = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="Auth-form-container">
      {submitted ? (
        <div style={{ textAlign: "center" }}>
          <h2>You have scheduled your online check up for {test}</h2>
          <h3>The details will be shared on your email</h3>
          <h4>
            Go to <Link to="/">Homepage</Link>
          </h4>
        </div>
      ) : (
        <form className="Auth-form" onSubmit={handleScheduleTest}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Book your healthcare test today</h3>
            <div className="form-group mt-3">
              <label>Full Name*</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g John Doe"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile Number*</label>
              <input
                type="emailnumber"
                className="form-control mt-1"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Pincode*</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your pincode"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Choose Test*</label>
              <select
                className="form-select mt-1"
                name="test"
                id="test"
                onChange={(e) => setTest(e.target.value)}
                required
              >
                <option value="Complete Hemogram">Complete Hemogram</option>
                <option value="Liver Profile">Liver Profile</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Lipid Profile">Lipid Profile</option>
                <option value="Thyroid Profile">Thyroid Profile</option>
                <option value="Iron Deficiency">Iron Deficiency</option>
                <option value="Vitamin">Vitamin</option>
                <option value="Pathology">Pathology</option>
                <option value="Testosterone">Testosterone</option>
                <option value="Kidney Function Test">
                  Kidney Function Test
                </option>
                <option value="Cardiology">Cardiology</option>
                <option value="Radiology">Radiology</option>
              </select>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Schedule Test
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Healthcaretest;
