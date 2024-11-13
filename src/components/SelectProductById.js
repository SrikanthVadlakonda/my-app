import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SelectProductById = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const [card, setcart] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setcart(json));
    }
  }, [id]);

  return (
    <div className='SelectProductById-Container'>
      <p>Product details page</p>
      <p>{card.category}</p>
      <img src={card.image} style={{ width: '300px', height: '300px' }} alt={card.title} />
      <p>{card.title}</p>
      <p>{card.price}</p>
      <p>{card.description}</p>
    </div>
  );
};

export default SelectProductById;
