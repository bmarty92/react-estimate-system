import React from 'react';
import PropTypes from 'prop-types';



function InputField(props) {
  const { placeholder } = props;
  return <input className="input" placeholder={placeholder}/>;
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
