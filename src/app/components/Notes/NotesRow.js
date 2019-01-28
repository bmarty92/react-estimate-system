import React from 'react';
import PropTypes from 'prop-types';

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

NotesRow.propTypes = {
  note: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default NotesRow;
