// password123

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const validEmail = "user@example.com";
  const validPassword = "password123";

  const [email, setEmail] = useState(validEmail);
  const [password, setPassword] = useState(validPassword);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === validEmail && password === validPassword) {
      setUser({ email });
      navigate("/ecommerce");
    } else {
      setError("Invalid email address or password!");
      setEmail(validEmail);
      setPassword("");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-5 shadow">
        <h2 className="text-center">Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <input
          type="email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
