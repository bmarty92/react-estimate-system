import React from 'react';
import ScheduleRow from './ScheduleRow';

function ScheduleTable(props) {
  const { data, index } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>{data}</th>
        </tr>
        <ScheduleRow />
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
