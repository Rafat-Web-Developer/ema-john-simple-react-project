import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb, findAndSetCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cartItem, setCartItem] = useCart(products);

  const handleAddToCart = (selectProduct) => {
    let newCart = [];

    // find the cart is already present or not in the cart array
    const existProduct = cartItem.find(
      (product) => product.id === selectProduct.id
    );
    if (!existProduct) {
      selectProduct.quantity = 1;
      newCart = [...cartItem, selectProduct];
    } else {
      const restProduct = cartItem.filter(
        (product) => product.id !== selectProduct.id
      );
      existProduct.quantity += 1;
      newCart = [...restProduct, existProduct];
    }

    setCartItem(newCart);
    addToDb(selectProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartItem}></Cart>
      </div>
    </div>
  );
};

export default Shop;
