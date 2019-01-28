import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import InputField from '../components/InputField';

import sites from '../../sites';

function InitialScreen(props) {
  const { addInitialData } = props;
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
    addInitialData(payload);
  };
  return (
    <div className="initial-screen">
      <h3 className="initial-screen__title">Insert initial site info</h3>
      <form className="initial-screen__data-form" onSubmit={onSubmit}>
        <InputField placeholder="Object Name" name="name" />
        <InputField placeholder="Object Address" name="address" />
        <InputField placeholder="Company Name" name="company" />
        <InputField placeholder="Responsible Person" name="person" />
        <Button type="submit">Submit Entry</Button>
      </form>
    </div>
  );
}

InitialScreen.propTypes = {
  addInitialData: PropTypes.func.isRequired,
};

const enhance = connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        addInitialData: sites.actions.addInitialData,
      },
      dispatch
    )
);

export default enhance(InitialScreen);
