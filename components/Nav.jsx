import React from 'react';
import { Link } from 'react-router';


const Nav = () => {
  return (
    <nav className='flex justify-between items-center p-4'>
      <div>
        <h2>Fish Inventory Application</h2>
      </div>
      
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/route1">Route 1</Link>
        <Link to="/route2">Route 2</Link>
        <Link to="/route3">Route 3</Link>
      </div>

      <div>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Nav;
