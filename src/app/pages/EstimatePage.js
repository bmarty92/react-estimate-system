import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputField from '../components/InputField';
import Button from '../components/Button';
import EstimateTable from '../components/EstimateTable';

import sites from '../../sites';

function EstimatePage(props) {
  const { addItemData, estimates, match } = props;
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
    addItemData(payload, match.params.id);
  };
  return (
    <div className="estimate-page">
      <h3 className="estimate-page__title">
        Insert Item Info to create Estimate Table
      </h3>
      <form className="estimate-page__data-form" onSubmit={onSubmit}>
        <InputField placeholder="Item Name" name="name" />
        <InputField placeholder="Item Code" name="code" />
        <InputField placeholder="Item Dimension" name="dimension" />
        <InputField placeholder="Item Quantity" name="quantity" type="number"  />
        <InputField placeholder="Item Price" name="price" type="number" />
        <Button type="submit">Submit Entry</Button>
      </form>
      {!!estimates.length && (
        <div className="estimates">
          <EstimateTable estimates={estimates} />
        </div>
      )}
    </div>
  );
}

const enhance = connect(
  (state, props) => ({
    estimates: sites.selectors.getEstimatesId(state, props.match.params.id),
  }),
  dispatch =>
    bindActionCreators(
      {
        addItemData: sites.actions.addItemData,
      },
      dispatch
    )
);
export default enhance(EstimatePage);
