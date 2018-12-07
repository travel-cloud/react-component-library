import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label,
  id,
  classes,
  type,
  onClick,
}) => (
  <button id={id} type={type} className={`btn ${classes}`} onClick={onClick}>{label}</button>
);

// eslint-disable-next-line
Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  classes: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

// eslint-disable-next-line
Button.defaultProps = {
  classes: '',
  type: 'button',
  onClick: null,
};

export default Button;
