import React from 'react';

function ScheduleTable(props) {
  const { item } = props;
  const { date, name, code, dimension, quantity, total } = item;
  return (
    <React.Fragment>
      <tr>
        <td>{date}</td>
        <td>{name}</td>
        <td>{code}</td>
        <td>{dimension}</td>
        <td>{quantity}</td>
        <td>{total}</td>
      </tr>
    </React.Fragment>
  );
}

export default ScheduleTable;
