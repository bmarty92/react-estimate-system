import React from 'react';
import PropTypes from 'prop-types';

function ScheduleTable(props) {
  const { item } = props;
  const { date, name, code, dimension, quantity, total } = item;
  return (
    <React.Fragment>
      <tr>
        <td>{date}</td>
        <td>{name}</td>
        <td>{code}</td>
        <td>{dimension}</td>
        <td>{quantity}</td>
        <td>{total}</td>
      </tr>
    </React.Fragment>
  );
}

ScheduleTable.propTypes = {
  item: PropTypes.arrayOf({}).isRequired,
};

export default ScheduleTable;
