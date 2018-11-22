import React from 'react';
import RequestRow from './RequestRow';

function MechanismRequest(props) {
  const { mechanismsRequest } = props;
  return (
    <table className="request-table">
      <thead>
        <tr>
          <th>Request Date</th>
          <th>Mechanism Name</th>
          <th>Additional note</th>
        </tr>
      </thead>
      <tbody>
        {mechanismsRequest.map(request => (
          <RequestRow request={request} />
        ))}
      </tbody>
    </table>
  );
}

export default MechanismRequest;
