import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import SingleOrderItem from "../SingleOrderItem/SingleOrderItem";
import "./Order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cartItem, setCartItem] = useCart(products);

  const handleDeleteSingleOrderedItem = (deleteId) => {
    const restItems = cartItem.filter((product) => product.id !== deleteId);
    setCartItem(restItems);
    removeFromDb(deleteId);
  };

  return (
    <div className="shop-container">
      <div className="order-products-container">
        {cartItem.length > 0 ? (
          cartItem.map((product) => (
            <SingleOrderItem
              singleOrderItem={product}
              clickDeleteSingleOrderedItem={handleDeleteSingleOrderedItem}
            ></SingleOrderItem>
          ))
        ) : (
          <h1>Empty Cart</h1>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cartItem}>
          <button>Button Into Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
