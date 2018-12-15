import React from 'react';

function EstimateRow({ estimate }) {
  const { name, code, dimension, price, quantity } = estimate;
  return (
    <tr>
      <td>{name}</td>
      <td>{code}</td>
      <td>{dimension}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{(Number(price) * Number(quantity)).toFixed(2)}</td>
    </tr>
  );
}

export default EstimateRow;
