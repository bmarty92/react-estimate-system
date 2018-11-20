import React from 'react';


function ScheduleTable(props) {
  const { data, index } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Item Name</th>
          <th>Item Code</th>
          <th>Item Price</th>
          <th>Item Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>name</th>
          <th>code</th>
          <th>totalprice</th>
          <th>quantity</th>
          <th>price</th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total price must be here</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default ScheduleTable;
