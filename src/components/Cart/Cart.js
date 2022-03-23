import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let amount = 0;
    let shipping = 0;
    
    for (const product of cart) {
        amount += product.price;
        shipping += product.shipping;
    }

    const tax = parseFloat((amount * 0.1).toFixed(2));
    const grandTotal = (amount + shipping + tax).toFixed(2);

    return (
        <div className='cart-items'>
            <h4 className='cart-item-title'>Order Summary</h4>
            <div className='cart-item-body'>
                <p>Total Selected Items: {cart.length}</p>
                <p>Total Amount: {amount}</p>
                <p>Total Shipping: {shipping}</p>
                <p>Tax: {tax}</p>
                <h4>Grand Total: {grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;