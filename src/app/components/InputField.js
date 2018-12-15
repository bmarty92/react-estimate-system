import React from 'react';
import PropTypes from 'prop-types';

function InputField(props) {
  const { placeholder, name, type, onChange } = props;
  return (
    <input
      step="0.01"
      className="input"
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
    />
  );
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
