import "./navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../public/user.png";
import logo from "../../public/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Get the user's login status from localStorage.
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    // Remove the user's login status from localStorage.
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser({});
    navigate("/login");
  };

  return (
    <div className="nav">
      <div className="logo">
        {user.role ? (
          <Link to="/home" state={user.role}>
            <img src={logo} alt="Logo" />
          </Link>
        ) : (
          <img src={logo} alt="Logo" />
        )}
      </div>
      {isLoggedIn && (
        <div className="user-info">
          <img src={userIcon} alt={user.name} />
          <p>{user.name}</p>
          <button className="logout-botton" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
