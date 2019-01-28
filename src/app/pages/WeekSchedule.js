import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import InputField from '../components/InputField';
import Button from '../components/Button';
import ScheduleTable from '../components/ScheduleTable';

import sites from '../../sites';

class WeekSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      selectedItem: {},
      quantity: null,
      calculatedPrice: null,
    };
  }

  setDate = event => {
    event.preventDefault();
    const dayDate = event.target.value;
    this.setState({ date: dayDate });
  };

  onSelect = event => {
    event.preventDefault();
    const { estimates } = this.props;
    const selected = estimates.find(
      estimate => estimate.id === Number(event.target.value)
    );
    this.setState({ selectedItem: selected });
  };

  calculateTotal = event => {
    event.preventDefault();
    const { selectedItem } = this.state;
    const calculated = Number(event.target.value) * selectedItem.price;
    this.setState({ calculatedPrice: calculated });
    this.setState({ quantity: event.target.value });
  };

  addEntry = () => {
    const { date, selectedItem, calculatedPrice, quantity } = this.state;
    const { addSchedule, match } = this.props;
    const payload = {
      date,
      name: selectedItem.name,
      code: selectedItem.code,
      dimension: selectedItem.dimension,
      price: selectedItem.price,
      quantity,
      total: calculatedPrice,
    };
    addSchedule(payload, match.params.id);
  };

  render() {
    const { estimates, schedule } = this.props;
    const { selectedItem, calculatedPrice } = this.state;
    const totalPrice = schedule.reduce(
      (result, value) => result + value.total,
      0
    );
    return (
      <div className="schedule-page">
        <h3 className="schedule-page__title">
        Insert Item Info to create Schedule Table
        </h3>
        <table className="dayTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item Name</th>
              <th>Item Code</th>
              <th>Item Dimension</th>
              <th>Item Quantity</th>
              <th>Total price, Eu</th>
            </tr>
            <tr className="dayTable__form">
              <th>
                <InputField type="date" onChange={this.setDate} name="date" />
              </th>
              <th>
                <select onChange={this.onSelect}>
                  {estimates.map(estimate => (
                    <option value={estimate.id}>{estimate.name}</option>
                  ))}
                </select>
              </th>
              <th>{selectedItem.code}</th>
              <th>{selectedItem.dimension}</th>
              <th>
                <InputField
                  placeholder="Quantity"
                  type="number"
                  onChange={this.calculateTotal}
                  name="quantity"
                />
              </th>
              <th>{calculatedPrice}</th>
              <th className="dayTable__buttonCell">
                <Button type="button" onClick={this.addEntry}>
                  Create Entry
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
          {!!schedule.length &&
            schedule.map(item => <ScheduleTable item={item} />)}
          </tbody>
          {!!schedule.length && (
            <tfoot>
              <tr>
                <td>Total Price, Eu</td>
                <td>{totalPrice}</td>
              </tr>
            </tfoot>
          )}
        </table>
        </div>
    );
  }
}

const enhance = connect(
  (state, props) => {
    const estimates = sites.selectors.getEstimatesId(
      state,
      props.match.params.id
    );
    return {
      estimates: estimates.map((estimate, index) => ({
        ...estimate,
        id: index,
      })),
      schedule: sites.selectors.getScheduleId(state, props.match.params.id),
    };
  },
  dispatch =>
    bindActionCreators(
      {
        addSchedule: sites.actions.addSchedule,
      },
      dispatch
    )
);

export default enhance(WeekSchedule);
