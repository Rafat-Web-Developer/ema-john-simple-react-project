import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart-items'>
            <h4 className='cart-item-title'>Order Summary</h4>
            <div className='cart-item-body'>
                <p>Total Selected Items: {cart.length}</p>
                <p>Total Amount: </p>
                <p>Total Shipping: </p>
                <p>Tax: </p>
                <h4>Grand Total: </h4>
            </div>
        </div>
    );
};

export default Cart;