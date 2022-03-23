import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let price = 0;
    let shipping = 0;
    let quantity = 0;
    
    for (const product of cart) {
        price += product.price * product.quantity;
        shipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = (price + shipping + tax).toFixed(2);

    return (
        <div className='cart-items'>
            <h4 className='cart-item-title'>Order Summary</h4>
            <div className='cart-item-body'>
                <p>Total Selected Items: {quantity}</p>
                <p>Total Price: {price}</p>
                <p>Total Shipping: {shipping}</p>
                <p>Tax: {tax}</p>
                <h4>Grand Total: {grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;