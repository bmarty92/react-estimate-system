import React from 'react';

function EstimateRow({ mechanism }) {
  const { name, company, time, price, timeDim } = mechanism;
  return (
    <tr>
      <th>{name}</th>
      <th>{company}</th>
      <th>{time}</th>
      <th>{timeDim}</th>
      <th>{price}</th>
      <th>{Number(price) * Number(time)}</th>
    </tr>
  );
}

export default EstimateRow;
