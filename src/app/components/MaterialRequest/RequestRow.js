import React from 'react';

function RequestRow(props) {
  const { request } = props;
  const { date, name, note, dimension, quantity } = request;
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{dimension}</td>
      <td>{quantity}</td>
      <td>{note}</td>
    </tr>
  );
}

export default RequestRow;
