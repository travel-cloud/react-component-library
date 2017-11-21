import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ fieldId, name, options, onChange, defaultValue  }) => {
  return (
    <div className="form-group">
      <label htmlFor={fieldId}>{name}</label>
      <select
        id={fieldId}
        className="form-control"
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {
          options.map((option) => {
            const formattedValue = option.value ||
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
};

// eslint-disable-next-line
Select.propTypes = {
  fieldId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

// eslint-disable-next-line
Select.defaultProps = {
  onChange: null,
  defaultValue: '',
};

export default Select;
