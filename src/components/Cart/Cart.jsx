import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShippingPrice =  0;
  let quantity = 0;

  for (const product of cart) {

    totalPrice = totalPrice + product.price * product.quantity;
    totalShippingPrice = totalShippingPrice + product.shipping
    quantity = quantity + product.quantity
  }
  
const tax = totalPrice * 7 / 100;
const grandTotal = totalPrice + totalShippingPrice + tax;

  return (
    <div className="cart">
      <h4 className="cart-header">order summery </h4>
      <p>Selected Item : {quantity}</p>
      <p>Total Price : {totalPrice}</p>
      <p>Total-Shipping Price: {totalShippingPrice}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
