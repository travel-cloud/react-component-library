import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  fieldId,
  fieldName,
  onChange,
  helpText,
  value,
  autoComplete,
  required,
  readOnly,
}) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <input
      type="text"
      id={fieldId}
      className="form-control"
      onChange={onChange}
      defaultValue={value}
      autoComplete={autoComplete}
      required={required}
      readOnly={readOnly}
    />
    { helpText && <span className="help-block">{helpText}</span> }
  </div>
);

// eslint-disable-next-line
Input.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
};

// eslint-disable-next-line
Input.defaultProps = {
  onChange: null,
  helpText: null,
  value: '',
  autoComplete: 'on',
  required: false,
  readOnly: false,
};

export default Input;
