import React from "react";
import { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please fill in all fields");
    } else if (username === "fshind" && password === "fshind") {
      navigate("/admin");
      localStorage.setItem("isAuthenticated", true);
    } else if (username !== "fshind" && password !== "fshind") {
      alert("Invalid username or password");
    }
    setUsername("");
    setPassword("");
  }
  return (
    <>
      <div className="mainabb">
        <div className="formWrapperr">
          <div className="headingEnn">Admin Login</div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="inputt"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="inputt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
