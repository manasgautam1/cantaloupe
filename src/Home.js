import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='overlay'>
        <div className='container'>
          <h1>Your favourite food delivered to you</h1>
          <Link to='/food-items' className='order-btn'>
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
