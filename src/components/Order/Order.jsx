import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const savedCart = useLoaderData();
    const [cart,setCart]=useState(savedCart)

    const handleRemoveFromCart =(id)=>{
      const remaining = cart.filter((product) => product.id !== id);
      setCart(remaining);
      removeFromDb(id);

    }
    const handleClearCart =()=>{
      setCart([]);
      deleteShoppingCart();
    }
  
    return (
        <div className="shop-container">
      <div className="order-container">

      {
        cart.map((product) => <ReviewItem key={product.id} product ={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
      }
        
      </div>

      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart} >

        <Link to={"/checkout"}><button className="btn-procced">  <span>Procced Checkout </span> <FontAwesomeIcon icon={faArrowCircleRight} />     </button></Link>

        </Cart>
      </div>
    </div>
    );
};

export default Order;