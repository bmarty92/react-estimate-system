import React from 'react';

function NotesRow(props) {
  const { note } = props;
  const { date, name, message } = note;
  return (
    <tr>
      <th>{date}</th>
      <th>{name}</th>
      <th className="noteCell">{message}</th>
    </tr>
  );
}

export default NotesRow;
