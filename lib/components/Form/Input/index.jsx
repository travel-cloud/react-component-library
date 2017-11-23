import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Input = ({ fieldId, fieldName, onChange, helpText, value, autoComplete }) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <input
      type="text"
      id={fieldId}
      className="form-control"
      onChange={onChange}
      value={value}
      autoComplete={autoComplete}
    />
    { helpText && <span className="help-block">{helpText}</span> }
  </div>
);
/* eslint-enable */

// eslint-disable-next-line
Input.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
};

// eslint-disable-next-line
Input.defaultProps = {
  onChange: null,
  helpText: null,
  value: null,
  autoComplete: 'on',
};

export default Input;
