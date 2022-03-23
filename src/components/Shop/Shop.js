import React, { useEffect, useState } from 'react';
import { addToDb, findAndSetCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const getCart = findAndSetCart();
        const newCartItems = [];
        for (const productId in getCart) {
            const getProduct = products.find(product => product.id === productId);
            if(getProduct){
                const quantity = getCart[productId];
                getProduct.quantity = quantity;
                // console.log(getProduct);
                newCartItems.push(getProduct);
            }
        }
        setCartItem(newCartItems);
    }, [products]);

    const handleAddToCart = (product) =>{
        addToDb(product.id);
        const newCart = [...cartItem, product];
        setCartItem(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cartItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;