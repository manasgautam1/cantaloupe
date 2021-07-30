import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1>CANTALOUPE</h1>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/food-items'>ORDER NOW</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
