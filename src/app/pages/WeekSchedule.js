import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      calculatedPrice: null,
      existingSchedule: null,
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
  };

  addEntry = () => {
    const { date, selectedItem, calculatedPrice } = this.state;
    const { addSchedule, match } = this.props;
    const payload = {
      date,
      data: {
        name: selectedItem.name,
        code: selectedItem.code,
        dimension: selectedItem.dimension,
        price: selectedItem.price,
        quantity: selectedItem.quantity,
        total: calculatedPrice,
      },
    };
    addSchedule(payload, match.params.id);
  };

  render() {
    const { estimates, schedule } = this.props;
    const { date, selectedItem, calculatedPrice } = this.state;
    const reducedSchedule = schedule.reduce((result, value) => {
      const resultData = result[date] || [];
      return {
        ...result,
        [value.date]: [...resultData, value.data],
      };
    }, {});
    console.log(reducedSchedule);
    console.log(Object.entries(reducedSchedule));
    return (
      <React.Fragment>
        <InputField type="date" onChange={this.setDate} name="date" />
        {!!date && (
          <table className="dayTable">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Item Code</th>
                <th>Item Dimension</th>
                <th>Item Quantity</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
                  />
                </th>
                <th>{calculatedPrice}</th>
                <th>
                  <Button type="button" onClick={this.addEntry}>
                    Create Entry
                  </Button>
                </th>
              </tr>
            </tbody>
          </table>
        )}
        <div>{JSON.stringify(Object.entries(reducedSchedule))}</div>
        {Object.entries(reducedSchedule).map((data, index) => {
          <ScheduleTable data={data}, index={index} />
        })}
        ;
      </React.Fragment>
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
