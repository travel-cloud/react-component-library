import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label,
  classes,
  type,
  onClick,
}) => (
  <button type={type} className={`btn ${classes}`} onClick={onClick}>{label}</button>
);

// eslint-disable-next-line
Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  classes: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

// eslint-disable-next-line
Button.defaultProps = {
  classes: '',
  type: 'button',
  onClick: null,
};

export default Button;
