import React from 'react';
import MechanismRow from './MechanismRow';

function MechanismTable(props) {
  const { mechanisms } = props;
  return (
    <table className="mechanism-table">
      <thead>
        <tr>
          <th>Mechanism Name</th>
          <th>Providing Company</th>
          <th>Usage Time</th>
          <th>Time Dimension</th>
          <th>Price</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
        {mechanisms.map(mechanism => (
          <MechanismRow mechanism={mechanism} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total Price</th>
          <th>Calculation must be here</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default MechanismTable;
