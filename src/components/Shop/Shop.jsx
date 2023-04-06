import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilites";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  useEffect(() => {
    const storeCart = getShoppingCart();
    const savedCart = [];
    //step 1 getId of the Added product

    for (const id in storeCart) {
      //step 2 get product from products state by using id

      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        // step 3 Add quantity
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;

        //step 4 add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added product ',addedProduct);
    }
    setCart(savedCart);
  }, [products]);



  const handleAddToCart = (product) => {
    // let newcart = [...cart, product];
    // setCart(newcart);
    // console.log(cart);

    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart =()=>{
    setCart([]);
    deleteShoppingCart();
  }


  
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
        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
