import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    console.log(product);
    const {id,price,img ,quantity,name} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price : <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
                
            </div>
            <button className='btn-delete'>D</button>
        </div>
    );
};

export default ReviewItem;