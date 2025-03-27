import React from "react";
import { Link } from "react-router";

const Nav = () => {
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
        <Link
          to="/route3"
          className="text-neutral-700 hover:text-neutral-900 font-medium"
        >
          Route 3
        </Link>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="username"
          className="px-3 py-1 rounded border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
        />
        <input
          type="text"
          placeholder="password"
          className="px-3 py-1 rounded border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
        />
        <button className="px-4 py-1 bg-neutral-700 text-white rounded hover:bg-neutral-800 transition-colors">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
