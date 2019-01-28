import React from 'react';
import PropTypes from 'prop-types';

import RequestRow from './RequestRow';

function MechanismRequest(props) {
  const { mechanismsRequest } = props;
  return (
    <table className="styled-table">
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

MechanismRequest.propTypes = {
  mechanismsRequest: PropTypes.arrayOf({}).isRequired,
};

export default MechanismRequest;
