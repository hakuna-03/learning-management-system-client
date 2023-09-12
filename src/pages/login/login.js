import "./login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
function Login() {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const handleLogin = async () => {
    axios
      .post(`${baseURL}/login`, { email, password })
      .then((response) => {
        if (response.status === 200) {
          // The login was successful. Get the user data from the response and store it in local storage.
          const data = response.data;
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("isLoggedIn", true);
          navigate("/home", { state: { role: data.role } });
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            setErrorMessage("*Invalid email format | *too short password");
          } else if (error.response.status === 500) {
            setErrorMessage("Server not working, Please try again later");
          } else {
            setErrorMessage("Incorrect email or password");
          }
        } else {
          setErrorMessage("Something went wrong, Please try again later");
        }
      });
  };
  useEffect(() => {
    document.title = "Login";
  }, []);

  useEffect(() => {}, [errorMessage]);

  return (
    <>
    <Navbar />
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-botton" onClick={handleLogin}>
          Login
        </button>
        {errorMessage && <p className="error-label">{errorMessage}</p>}
      </div>
    </div>
    </>
  );
}

export default Login;
