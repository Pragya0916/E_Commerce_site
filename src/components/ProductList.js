import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container mt-4 ">
      {products.length === 0 ? (
        <div className="text-center mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="No Results"
            width="150"
          />
          <h3 className="text-muted mt-3">OOPS! No Results Found</h3>
          <p className="text-secondary">Try searching for something else.</p>
        </div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
