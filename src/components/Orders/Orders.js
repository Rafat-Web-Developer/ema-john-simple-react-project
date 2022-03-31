import React from "react";
import useProducts from "../../hooks/useProducts";

const Orders = () => {
  const [products, setProducts] = useProducts();

  return (
    <div className="shop-container">
      <div className="products-container">
        <h4>Total Products : {products.length}</h4>
      </div>
      <div className="cart-container">
        <h4>Total Cart Products : </h4>
        {/* <Cart cart={cartItem}></Cart> */}
      </div>
    </div>
  );
};

export default Orders;
