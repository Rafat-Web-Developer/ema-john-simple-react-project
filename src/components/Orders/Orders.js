import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cartItem, setCartItem] = useCart(products);

  return (
    <div className="shop-container">
      <div className="products-container">
        <h4>Total Products : {products.length}</h4>
      </div>
      <div className="cart-container">
        <Cart cart={cartItem}></Cart>
      </div>
    </div>
  );
};

export default Orders;
