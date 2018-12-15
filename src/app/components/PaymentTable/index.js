import React from 'react';
import PaymentRow from './PaymentRow';

const days = Array.from(Array(31), (_, x) => x);

function PaymentTable(props) {
  const { payment, month } = props;
  return (
    <table className="styled-table">
    <caption>{`Payment calculation of ${month} month`}</caption>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>EU/Hour</th>
          {days.map(index => (
            <th>{index + 1}</th>
          ))}
          <th>Total Hours</th>
          <th>Total Payment</th>
        </tr>
      </thead>
      <tbody>
        {payment.map(employeePayment => (
          <PaymentRow employeePayment={employeePayment} />
        ))}
      </tbody>
    </table>
  );
}

export default PaymentTable;
