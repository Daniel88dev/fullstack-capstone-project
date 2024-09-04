import React, { useState } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    console.log(data);
  };

  const handleFirstNameInputChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        firstName: e.target.value,
      };
    });
  };

  const handleLastNameInputChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        lastName: e.target.value,
      };
    });
  };

  const handleEmailInputChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };

  const handlePasswordInputChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="register-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Register</h2>
            {/* insert code here to create input elements for all the variables - firstName, lastName, email, password */}
            <div className="mb-4">
              <label htmlFor="firstName" className="form label">
                First Name:
              </label>
              <br />
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="Enter your First Name"
                value={data.firstName}
                onChange={handleFirstNameInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="form label">
                Last Name:
              </label>
              <br />
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Enter your Last Name"
                value={data.lastName}
                onChange={handleLastNameInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form label">
                Email:
              </label>
              <br />
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                value={data.email}
                onChange={handleEmailInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form label">
                Password:
              </label>
              <br />
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={data.password}
                onChange={handlePasswordInputChange}
              />
            </div>
            {/* insert code here to create a button that performs the `handleRegister` function on click */}
            <button
              className="btn btn-primary w-100 mb-3"
              onClick={handleRegister}
            >
              Register
            </button>
            <p className="mt-4 text-center">
              Already a member?{" "}
              <a href="/app/login" className="text-primary">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
