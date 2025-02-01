import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";

const Ecommerce = ({ user, setUser }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(["all", ...data]));
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "all"
        ? products
        : products.filter((product) => product.category === category)
    );
  };

  return (
    <div className="d-flex">
      <Sidebar
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />
      <div className="flex-grow-1">
        <Navbar user={user} onSignOut={handleSignOut} onSearch={handleSearch} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Ecommerce;
