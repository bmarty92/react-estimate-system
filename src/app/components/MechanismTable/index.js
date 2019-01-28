import React from 'react';
import PropTypes from 'prop-types';

import MechanismRow from './MechanismRow';

function MechanismTable(props) {
  const { mechanisms } = props;
  const allPrice = mechanisms.reduce(
    (result, value) => result + value.price * value.time,
    0
  );
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Mechanism Name</th>
          <th>Providing Company</th>
          <th>Usage Time</th>
          <th>Time Dimension</th>
          <th>Price, Eu</th>
          <th>Total price, Eu</th>
        </tr>
      </thead>
      <tbody>
        {mechanisms.map(mechanism => (
          <MechanismRow mechanism={mechanism} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total Price, Eu</td>
          <td>{allPrice.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
}

MechanismTable.propTypes = {
  mechanisms: PropTypes.arrayOf({}).isRequired,
};

export default MechanismTable;
