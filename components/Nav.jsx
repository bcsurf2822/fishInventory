import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { login } from "../api/auth";

const Nav = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setLoggedInUser(username);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(credentials.username, credentials.password);
      setLoggedInUser(credentials.username);
      setCredentials({ username: "", password: "" });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setLoggedInUser(null);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-neutral-100 shadow-md">
      <div>
        <h2 className="text-2xl font-bold text-neutral-800">
          Fish Inventory Application
        </h2>
      </div>

      <div className="flex gap-6">
        <Link
          to="/"
          className="text-neutral-700 hover:text-neutral-900 font-medium"
        >
          Markets
        </Link>
        <Link
          to="/fish"
          className="text-neutral-700 hover:text-neutral-900 font-medium"
        >
          Fish
        </Link>
      </div>

      <div className="flex gap-2">
        {!loggedInUser ? (
          <>
            <input
              type="text"
              placeholder="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="px-3 py-1 rounded border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
            <input
              type="password"
              placeholder="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="px-3 py-1 rounded border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
            <button 
              onClick={handleLogin}
              className="px-4 py-1 bg-neutral-700 text-white rounded hover:bg-neutral-800 transition-colors"
            >
              Login
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-neutral-700">Welcome, {loggedInUser}!</span>
            <button 
              onClick={handleLogout}
              className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
