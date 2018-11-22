import React from 'react';

function RequestRow(props) {
  const { request } = props;
  const { date, name, note } = request;
  return (
    <tr>
      <th>{date}</th>
      <th>{name}</th>
      <th className="noteCell">{note}</th>
    </tr>
  );
}

export default RequestRow;
