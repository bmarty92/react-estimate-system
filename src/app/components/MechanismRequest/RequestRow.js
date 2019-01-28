import React from 'react';
import PropTypes from 'prop-types';

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

RequestRow.propTypes = {
  request: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RequestRow;
