import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputField from '../components/InputField';
import Button from '../components/Button';

import sites from '../../sites';

const days = Array.from(Array(31), (_, x) => x);

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: null,
      names: {},
      hours: {},
      selectedName: null,
    };
  }

  // setMechNote = event => {
  //   event.preventDefault();
  //   this.setState({ mechanismNote: event.target.value });
  // };

  // setMaterialNote = event => {
  //   event.preventDefault();
  //   this.setState({ materialNote: event.target.value });
  // };

  setMonth = event => {
    event.preventDefault();
    this.setState({ month: event.target.value });
  };

  addEmployee = event => {
    event.preventDefault();
    this.setState({
      names: [...this.state.names, event.target.employeeData.value],
    });
  };

  setHours = event => {
    event.preventDefault();
    const { hours } = this.state;

    // const hour = event.target.value;
    // const key = event.target.name;

    // const allHours = { event.target.name: event.target.value };
    // this.setState({ hours: [...hours, hour] });
  };

  render() {
    const { month, names } = this.state;
    return (
      <React.Fragment>
        <div className="payment-screen">
          <div className="payment-screen__data-fields">
            <p>Insert name of the month</p>
            <InputField
              placeholder="Month"
              name="month"
              onChange={this.setMonth}
            />
            <form onSubmit={this.addEmployee}>
              <p>Insert name and lastname of the employee</p>
              <InputField placeholder="Name, Lastname" name="employeeData" />
              <Button type="submit">Add employee</Button>
            </form>
          </div>
          <h1 className="payment-screen__month-title">{month}</h1>
          {/* <table className="payment-table">
            <thead>
              <tr>
                <th>Name, Lastname</th>
                <th>Payment (EU/h)</th>
                {days.map((index, value) => (
                  <th key={index} className="payment-cell">
                    {value + 1}
                  </th>
                ))}
                <th>Total Hours</th>
                <th>Total Payment</th>
              </tr>
            </thead>
          </table> */}
        </div>
        <div className="payment-forms">
          <form className="payment-initial-data">
            <select onChange={this.selectName}>
              {!!names.length &&
                names.map((name, index) => (
                  <option value={index}>
                    {index + 1} {name}
                  </option>
                ))}
            </select>

            <InputField
              className="payment-field"
              placeholder="EU/h"
              name="euHour"
            />
          </form>

          <form className="payment-calculation" onSubmit="calculatePayment">
            {days.map(index => (
              <InputField placeholder={index + 1} name={index + 1} />
            ))}

            <Button type="submit">Add entry</Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Payment;
