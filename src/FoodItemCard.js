import React from 'react';

const FoodItemCard = (props) => {
  return (
    <div className='food-item-card'>
      <img src={props.url} alt='' />
      <div>
        <h2>{props.title}</h2>
        <p>Rs. {props.price}</p>
        <button>Add Item</button>
      </div>
    </div>
  );
};

export default FoodItemCard;
