import React from 'react';

function RequestRow(props) {
  const { request } = props;
  const { date, name, note } = request;
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td className="noteCell">{note}</td>
    </tr>
  );
}

export default RequestRow;
