import React from 'react';
import EstimateRow from './EstimateRow';

function EstimateTable(props) {
  const { estimates } = props;
  const allPrice = estimates.reduce(
    (result, value) => result + value.price * value.quantity,
    0
  );
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Code</th>
          <th>Item Dimension</th>
          <th>Item Quantity</th>
          <th>Item Price</th>
          <th>Total price, Eu</th>
        </tr>
      </thead>
      <tbody>
        {estimates.map(estimate => (
          <EstimateRow estimate={estimate} />
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

export default EstimateTable;
