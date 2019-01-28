import React from 'react';
import PropTypes from 'prop-types';

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

RequestRow.propTypes = {
  request: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default RequestRow;
