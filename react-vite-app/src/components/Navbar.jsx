import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light px-3"
      style={{ position: "relative", width: "100%" }}
    >
      <img src="whole.png" />
      <div className="collapse navbar-collapse justify-content-center">
        <input
          type="text"
          className="form-control rounded-4"
          placeholder="Search for your favourite groups in ATG"
          aria-label="Search"
          style={{
            width: "100%",
            paddingLeft: "40px",
          }}
        />
        <img
          src="baseline-search-24px.png"
          alt="Search Icon"
          style={{
            position: "absolute",
            left: "200px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "20px",
            height: "20px",
          }}
        />
      </div>
      <div className="d-flex">
        <Link className="btn btn-outline-primary me-2" to="/signup">
          Create Account
        </Link>
        <Link className="btn btn-outline-secondary" to="/signin">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
