import React from "react";

const Navbar = ({ user, onSignOut, onSearch }) => {
  return (
    <nav className="navbar  p-3 d-flex justify-content-between">
      <div className="w-90">
        <h1 className="navbar-brand fs-24">MyStore</h1>
        <input
          type="text"
          className="form-control w-100 "
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-danger" onClick={onSignOut}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
