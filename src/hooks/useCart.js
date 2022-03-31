import { useEffect, useState } from "react";
import { findAndSetCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cartItem, setCartItem] = useState([]);
  // load cart from localStorage for change the products state

  useEffect(() => {
    // get cart
    const getCart = findAndSetCart();

    const newCartItems = [];

    // find all products information from product state using id which are save in localStorage
    for (const productId in getCart) {
      const getProduct = products.find((product) => product.id === productId);
      if (getProduct) {
        const quantity = getCart[productId];
        getProduct.quantity = quantity;
        // console.log(getProduct);
        newCartItems.push(getProduct);
      }
    }

    setCartItem(newCartItems);
  }, [products]);
  return [cartItem, setCartItem];
};
export default useCart;
