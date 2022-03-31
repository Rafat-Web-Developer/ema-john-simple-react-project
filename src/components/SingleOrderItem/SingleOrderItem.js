import React from "react";

const SingleOrderItem = ({ singleOrderItem }) => {
  const { name } = singleOrderItem;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default SingleOrderItem;
