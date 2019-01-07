import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  fieldId,
  fieldName,
  name,
  options,
  onChange,
  defaultValue,
  value,
  required,
  customClasses,
  disabled
}) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <select
      id={fieldId}
      name={name}
      className={customClasses ? `form-control ${customClasses}` : 'form-control'}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      required={required}
      disabled={disabled}
    >
      {
        options.map((option) => {
          const formattedValue = option.value === '' || option.value ?
            option.value :
            option.text.toUpperCase().replace(/\s/g, '_');

          return (
            <option key={formattedValue} value={formattedValue}>
              {option.text}
            </option>
          );
        })
      }
    </select>
  </div>
);

// eslint-disable-next-line
Select.propTypes = {
  fieldId: PropTypes.string,
  fieldName: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  customClasses: PropTypes.string,
  disabled: PropTypes.bool,
};

// eslint-disable-next-line
Select.defaultProps = {
  onChange: null,
  defaultValue: '',
  value: '',
  fieldName: '',
  fieldId: '',
  required: false,
  customClasses: '',
  disabled: false,
};

export default Select;
