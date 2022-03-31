import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import SingleOrderItem from "../SingleOrderItem/SingleOrderItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cartItem, setCartItem] = useCart(products);

  return (
    <div className="shop-container">
      <div className="products-container">
        {cartItem.map((product) => (
          <SingleOrderItem singleOrderItem={product}></SingleOrderItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartItem}></Cart>
      </div>
    </div>
  );
};

export default Orders;
