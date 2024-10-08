import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  fieldId,
  fieldName,
  onChange,
  helpText,
  value,
  required,
  name,
  customClasses,
  minLength,
}) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <textarea
      id={fieldId}
      name={name}
      className={customClasses ? `form-control ${customClasses}` : 'form-control'}
      defaultValue={value}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength || undefined}
    />
    { helpText && <span className="help-block">{helpText}</span> }
  </div>
);

// eslint-disable-next-line
Textarea.propTypes = {
  fieldId: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  customClasses: PropTypes.string,
  minLength: PropTypes.number,
};

// eslint-disable-next-line
Textarea.defaultProps = {
  onChange: null,
  helpText: null,
  value: null,
  required: false,
  fieldId: '',
  name: '',
  customClasses: '',
  minLength: null,
};

export default Textarea;
