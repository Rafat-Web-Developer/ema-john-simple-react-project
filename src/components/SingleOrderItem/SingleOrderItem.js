import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingleOrderItem.css";

const SingleOrderItem = ({ singleOrderItem }) => {
  const { img, name, price, shipping, quantity } = singleOrderItem;
  return (
    <div className="single-order-item-container">
      <img src={img} alt="" />
      <div className="single-order-item-details-container">
        <div className="single-order-item-details">
          <h4>{name}</h4>
          <p>Price : ${price}</p>
          <p>Shipping Cost : ${shipping}</p>
          <p>Quantity : {quantity}</p>
        </div>
        <div className="single-order-item-delete">
          <button>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderItem;
