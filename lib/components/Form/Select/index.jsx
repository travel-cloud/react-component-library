import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  fieldId,
  fieldName,
  name,
  options,
  onChange,
  defaultValue,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{name}</label>
    <select
      id={fieldId}
      name={name}
      className="form-control"
      onChange={onChange}
      defaultValue={defaultValue}
      required={required}
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
  required: PropTypes.bool,
};

// eslint-disable-next-line
Select.defaultProps = {
  onChange: null,
  defaultValue: '',
  fieldName: '',
  fieldId: '',
  required: false,
};

export default Select;
