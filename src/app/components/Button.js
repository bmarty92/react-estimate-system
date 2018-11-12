import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, type, onClick } = props;
  const click = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button className="button" type={type} onClick={click} >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
