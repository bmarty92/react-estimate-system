import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MechanismTable from '../components/MechanismTable';
import InputField from '../components/InputField';
import Button from '../components/Button';

import sites from '../../sites';

function Mechanisms(props) {
  const { mechanisms, addMechanismData, match} = props;
  const onSubmit = event => {
    event.preventDefault();
    const payload = [...event.target.children].reduce((result, child) => {
      if (child.tagName.toUpperCase() !== 'INPUT') {
        return result;
      }
      return {
        ...result,
        [child.name]: child.value,
      };
    }, {});
    addMechanismData(payload, match.params.id);
  };
  return (
    <React.Fragment>
      <div className="mechanism-screen">
        <h3 className="mechanism-screen__title">
          Insert info of used mechanisms
        </h3>
        <form className="mechanism-screen__data-form" onSubmit={onSubmit}>
          <InputField placeholder="Mechanism Name" name="name" />
          <InputField placeholder="Providing Company" name="company" />
          <InputField placeholder="Working Time" name="time" />
          <InputField placeholder="Time Dimension" name="timeDim" />
          <InputField placeholder="Price" name="price" />
          <Button type="submit">Submit Entry</Button>
        </form>
      </div>
      {!!mechanisms.length && (
        <div className="estimates">
          <MechanismTable mechanisms={mechanisms} />
        </div>
      )}
    </React.Fragment>
  );
}

const enhance = connect(
  (state, props) => ({
    mechanisms: sites.selectors.getMechanismsId(state, props.match.params.id),
  }),
  dispatch =>
    bindActionCreators(
      {
        addMechanismData: sites.actions.addMechanismData,
      },
      dispatch
    )
);
export default enhance(Mechanisms);
