import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Input = ({ fieldId, fieldName, onClick, checked, text }) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <input
      type="checkbox"
      id={fieldId}
      className="form-control"
      onClick={onClick}
      defaultChecked={checked}
    />
    <label htmlFor={fieldId}>{text}</label>
  </div>
);
/* eslint-enable */

// eslint-disable-next-line
Input.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

// eslint-disable-next-line
Input.defaultProps = {
  onClick: null,
  checked: false,
};

export default Input;
