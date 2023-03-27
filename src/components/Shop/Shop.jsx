import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart ,setCart]=useState([]);


  const handleAddToCart = (product) => {
    let newcart = [...cart , product]
    setCart(newcart);
    console.log(cart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <h4>order summery </h4>
        <p>Selected item : {cart.length}</p>
       
      </div>
    </div>
  );
};

export default Shop;
