import React, { useEffect, useState } from 'react';
import { addToDb, findAndSetCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    // load all products from db where bd is in the public folder
    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    // load cart from localStorage for change the products state
    useEffect(() => {
        // get cart
        const getCart = findAndSetCart();
        
        const newCartItems = [];
        
        // find all products information from product state using id which are save in localStorage  
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

    const handleAddToCart = (selectProduct) =>{
        
        let newCart = [];

        // find the cart is already present or not in the cart array
        const existProduct = cartItem.find(product => product.id === selectProduct.id);
        if(!existProduct){
            selectProduct.quantity = 1;
            newCart = [...cartItem, selectProduct];
        }else{
            const restProduct = cartItem.filter(product => product.id !== selectProduct.id);
            existProduct.quantity += 1;
            newCart = [...restProduct, existProduct]; 
        }

        setCartItem(newCart);
        addToDb(selectProduct.id);
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