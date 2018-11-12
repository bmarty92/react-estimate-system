import React from 'react';
import PropTypes from 'prop-types';

function InputField(props) {
  const { placeholder, name, type, onChange } = props;
  return (
    <input
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
};

export default InputField;
