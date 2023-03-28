import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShippingPrice =  0;

  for (const products of cart) {
    totalPrice = totalPrice + products.price;
    totalShippingPrice = totalShippingPrice + products.shipping
  }
  
const tax = totalPrice * 7 / 100;
const grandTotal = totalPrice + totalShippingPrice + tax;

  return (
    <div className="cart">
      <h4 className="cart-header">order summery </h4>
      <p>Selected Item : {cart.length}</p>
      <p>Total Price : {totalPrice}</p>
      <p>Total-Shipping Price: {totalShippingPrice}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
