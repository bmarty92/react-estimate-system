import React from 'react';

function NotesRow(props) {
  const { note } = props;
  const { date, name, message } = note;
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{message}</td>
    </tr>
  );
}

export default NotesRow;
