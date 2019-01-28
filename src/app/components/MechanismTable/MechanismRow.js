import React from 'react';
import PropTypes from 'prop-types';

function EstimateRow({ mechanism }) {
  const { name, company, time, price, timeDim } = mechanism;
  return (
    <tr>
      <td>{name}</td>
      <td>{company}</td>
      <td>{time}</td>
      <td>{timeDim}</td>
      <td>{price}</td>
      <td>{(Number(price) * Number(time)).toFixed(2)}</td>
    </tr>
  );
}

EstimateRow.propTypes = {
  mechanism: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EstimateRow;
