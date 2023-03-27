import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name,price,img,seller,quantity,ratings}=props.product
    return (
        <div className='product'>
            
            <img src={img} />

            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;