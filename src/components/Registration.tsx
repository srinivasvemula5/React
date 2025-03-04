import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!fullName || !email || !mobileNo) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return false;
    }
    if (!/^\d{10}$/.test(mobileNo)) {
      setError("Mobile number must be 10 digits.");
      return false;
    }
    setError(""); // Clear previous errors
    return true;
  };

  const saveReg = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userjson = { email, fullName, mobileNo };

    try {
      const res = await axios.post("http://localhost:8080/basha/add/user", userjson);
      console.log("Response --->", res.data);
      navigate("/bar");
    } catch (error) {
      console.error("Error --->", error);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div>
      <section className="testimonial py-5" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-5 bg-primary text-white text-center">
              <div className="card-body">
                <img
                  src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                  style={{ width: "30%" }}
                  alt="Registration"
                />
                <h2 className="py-3">VIKAS ELECTRONICS</h2>
                <h3>Registration</h3>
              </div>
            </div>
            <div className="col-md-8 py-5 border">
              <h4 className="pb-4">Please fill with your details</h4>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={saveReg}>
                <div className="form-group mb-3">
                  <input
                    placeholder="Full Name"
                    className="form-control"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    placeholder="Mobile No."
                    className="form-control"
                    type="text"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
