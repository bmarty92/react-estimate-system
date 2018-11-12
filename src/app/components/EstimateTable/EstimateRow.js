import React from 'react';

function EstimateRow({ estimate }) {
  const { name, code, dimension, price, quantity } = estimate;
  return (
    <tr>
      <th>{name}</th>
      <th>{code}</th>
      <th>{dimension}</th>
      <th>{quantity}</th>
      <th>{price}</th>
      <th>{Number(price) * Number(quantity)}</th>
    </tr>
  );
}

export default EstimateRow;
