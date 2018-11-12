import React from 'react';
import EstimateRow from './EstimateRow';

function EstimateTable(props) {
  const { estimates } = props;
  return (
    <table className="estimate-table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Code</th>
          <th>Item Dimension</th>
          <th>Item Quantity</th>
          <th>Item Price</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
        {estimates.map(estimate => (
          <EstimateRow estimate={estimate} />
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

export default EstimateTable;
