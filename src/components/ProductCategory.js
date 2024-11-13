import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategery = () => {
  const [category, setcategory] = useState([]);
  const [filterdata, setfilterdata] = useState([]);

  const fetchdata = async () => {
    let response = await fetch('https://fakestoreapi.com/products/categories');
    let data = await response.json();
    setcategory(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSelectCategery = async (data) => {
    let response = await fetch(`https://fakestoreapi.com/products/category/${data}`);
    let data1 = await response.json();
    setfilterdata(data1);
  };

  return (
    <div className="ProductCategery-Container">
      <div className="button-group">
        {category.map((data, index) => (
          <div key={index}>
            <button onClick={() => handleSelectCategery(data)} className="btn btn-primary">
              {data}
            </button>
          </div>
        ))}
      </div>
      
      <div className="filterdata-Container">
        {filterdata.map((item) => (
          <Link to="/selectProduct" state={{ id: item.id }} key={item.id} className="product-card">
            <div>
              <h4>{item.category}</h4>
              <div className="product-image-container">
                <img src={item.image} className="product-image" alt={item.category} />
              </div>
              <p className="product-price">Price: <span>${item.price.toFixed(2)}</span></p>
              <div className="product-rating">
                <p className="product-rate">Rating: {item.rating.rate}</p>
                <p>Count: {item.rating.count}</p>
              </div>
              <p className="product-description">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategery;
