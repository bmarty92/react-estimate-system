import React from 'react';

function ScheduleRow({ schedule }) {
  const { name, code, dimension, quantity, total } = schedule;
  return (
    <tr>
      <th>{name}</th>
      <th>{code}</th>
      <th>{dimension}</th>
      <th>{quantity}</th>
      <th>{total}</th>
    </tr>
  );
}

export default ScheduleRow;
