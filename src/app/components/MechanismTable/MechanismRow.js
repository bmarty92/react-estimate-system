import React from 'react';

function EstimateRow({ mechanism }) {
  const { name, company, time, price, timeDim } = mechanism;
  return (
    <tr>
      <td>{name}</td>
      <td>{company}</td>
      <td>{time}</td>
      <td>{timeDim}</td>
      <td>{price}</td>
      <td>{(Number(price) * Number(time)).toFixed(2)}</td>
    </tr>
  );
}

export default EstimateRow;
