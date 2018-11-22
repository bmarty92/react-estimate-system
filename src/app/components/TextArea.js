import React from 'react';
import PropTypes from 'prop-types';

function TextArea(props) {
  const { placeholder, name, rows, value, onChange } = props;
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
