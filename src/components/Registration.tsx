import axios from "axios";
import React, { useState } from "react";

export default function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const saveReg = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("submit clicked....");
    console.log("fullname--->" + fullName);

    const userjson = {  email,fullName, mobileNo };

    axios.post("http://localhost:8080/basha/add/user", userjson).then((res) => {
      console.log("res--->" + res.data);
    });
  };

  const getFullName = (e: any) => {
    setFullName(e.target.value);
  };
  const getMobileNo = (e: any) => {
    setMobileNo(e.target.value);
  };
  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <section className="testimonial py-5" id="testimonial">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 py-5 bg-primary text-white text-center ">
              <div className=" ">
                <div className="card-body">
                  <img
                    src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                    style-ref="width:30%"
                  />
                  <h2 className="py-3">Registration</h2>
                  <p>
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu
                    dictas concludaturque usu, facete detracto patrioque an per,
                    lucilius pertinacia eu vel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-5 border">
              <h4 className="pb-4">Please fill with your details</h4>
              <form onSubmit={saveReg}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      placeholder="Full Name"
                      className="form-control"
                      type="text"
                      onChange={getFullName}
                    />
                  </div>
                  <br></br>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      onChange={getEmail}
                    />
                  </div>
                </div>
                <br></br>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      id="Mobile No."
                      name="Mobile No."
                      placeholder="Mobile No."
                      className="form-control"
                      type="text"
                      onChange={getMobileNo}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <div className="form-group"></div>
                  </div>
                </div>
                <br></br>
                <div className="form-row">
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