import React from 'react';
import RequestRow from './RequestRow';

function MaterialRequest(props) {
  const { materialRequest } = props;
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Request Date</th>
          <th>Material Name</th>
          <th>Material Dimension</th>
          <th>Material Quantity</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {materialRequest.map(request => (
          <RequestRow request={request} />
        ))}
      </tbody>
    </table>
  );
}

export default MaterialRequest;
