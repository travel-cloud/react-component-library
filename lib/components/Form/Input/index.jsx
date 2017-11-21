import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Input = ({ fieldId, fieldName, onChange, helpText }) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <input
      type="text"
      id={fieldId}
      className="form-control"
      onChange={onChange}
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
};

// eslint-disable-next-line
Input.defaultProps = {
  onChange: null,
  helpText: null,
};

export default Input;
