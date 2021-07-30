import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodItemCard from './FoodItemCard';

const FoodItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://food-app-backend-mg.herokuapp.com/getFoodItems')
      .then((res) => {
        // console.log(res.data);
        setItems(res.data);
      });
  }, []);

  return (
    <div className='food-items'>
      <div className='container'>
        <h1>Food Items</h1>
        <div className='cards'>
          {items.map((item, index) => (
            <FoodItemCard
              key={index}
              title={item.title}
              url={item.img_url}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
