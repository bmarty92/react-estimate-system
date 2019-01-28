import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import PaymentTable from '../components/PaymentTable';
import InputField from '../components/InputField';
import Button from '../components/Button';

import sites from '../../sites';

const days = Array.from(Array(31), (_, x) => x);

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: null,
      names: [],
      selectedName: null,
      euHour: null,
    };
  }

  calculatePayment = event => {
    event.preventDefault();
    const { euHour, selectedName } = this.state;
    const { addPayment, match } = this.props;
    const payload = {
      name: selectedName,
      euPerHour: euHour,
      day1: event.target.day1.value,
      day2: event.target.day2.value,
      day3: event.target.day3.value,
      day4: event.target.day4.value,
      day5: event.target.day5.value,
      day6: event.target.day6.value,
      day7: event.target.day7.value,
      day8: event.target.day8.value,
      day9: event.target.day9.value,
      day10: event.target.day10.value,
      day11: event.target.day11.value,
      day12: event.target.day12.value,
      day13: event.target.day13.value,
      day14: event.target.day14.value,
      day15: event.target.day15.value,
      day16: event.target.day16.value,
      day17: event.target.day17.value,
      day18: event.target.day18.value,
      day19: event.target.day19.value,
      day20: event.target.day20.value,
      day21: event.target.day21.value,
      day22: event.target.day22.value,
      day23: event.target.day23.value,
      day24: event.target.day24.value,
      day25: event.target.day25.value,
      day26: event.target.day26.value,
      day27: event.target.day27.value,
      day28: event.target.day28.value,
      day29: event.target.day29.value,
      day30: event.target.day30.value,
      day31: event.target.day31.value,
    };
    addPayment(payload, match.params.id);
  };

  setMonth = event => {
    event.preventDefault();
    this.setState({ month: event.target.value });
  };

  addEmployee = event => {
    const { names } = this.state;
    event.preventDefault();
    this.setState({
      names: [...names, event.target.employeeData.value],
    });
  };

  addEUperHour = event => {
    event.preventDefault();
    this.setState({ euHour: event.target.value });
  };

  selectName = event => {
    event.preventDefault();
    const { names } = this.state;
    const selected = names.find(name => name === event.target.value);
    this.setState({ selectedName: selected });
  };

  render() {
    const { month, names } = this.state;
    const { payment } = this.props;
    return (
      <React.Fragment>
        <div className="payment-screen">
          <div className="payment-screen__data-fields">
            <p>Insert name of the month</p>
            <InputField
              placeholder="Month"
              name="month"
              onChange={this.setMonth}
              required
            />
            <form onSubmit={this.addEmployee}>
              <p>Insert name and lastname of the employee</p>
              <InputField
                placeholder="Name, Lastname"
                name="employeeData"
                required
              />
              <Button type="submit">Add employee</Button>
            </form>
          </div>
        </div>
        <div className="payment-forms">
          <div className="payment-initial-data">
            <select onChange={this.selectName}>
              {!!names.length &&
                names.map((name, index) => (
                  <option value={name}>
                    {index + 1} {name}
                  </option>
                ))}
            </select>

            <InputField
              className="payment-field"
              placeholder="EU/h"
              name="euHour"
              onChange={this.addEUperHour}
              required
            />
          </div>

          <form
            className="payment-calculation"
            onSubmit={this.calculatePayment}
          >
            {days.map(index => (
              <InputField placeholder={index + 1} name={`day${index + 1}`} />
            ))}

            <Button type="submit">Add entry</Button>
          </form>
        </div>
        <div className="payment-table">
          {!!payment.length && <PaymentTable payment={payment} month={month} />}
        </div>
      </React.Fragment>
    );
  }
}

Payment.propTypes = {
  addPayment: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  payment: PropTypes.arrayOf({}).isRequired,
};

const enhance = connect(
  (state, props) => ({
    payment: sites.selectors.getPaymentId(state, props.match.params.id),
  }),
  dispatch =>
    bindActionCreators(
      {
        addPayment: sites.actions.addPayment,
      },
      dispatch
    )
);
export default enhance(Payment);
