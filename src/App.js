import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Ecommerce from "./pages/Ecommerce";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route
          path="/ecommerce"
          element={<Ecommerce user={user} setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
}
