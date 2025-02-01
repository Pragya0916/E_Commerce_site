import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="card h-100 text-center "
      style={{
        boxShadow: "0 2px 8px 0 rgba(2, 2, 0.2, 0.2)",
      }}
    >
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{product.title}</h5>
        <p className="card-text text-success fw-bold">₹{product.price}</p>
        <p className="text-muted text-capitalize">{product.category}</p>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
