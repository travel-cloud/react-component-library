import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, options, onChange }) => {
  const formattedName = name.toLowerCase().replace(' ', '-');

  return (
    <div className="form-group">
      <label htmlFor={formattedName}>{name}</label>
      <select
        id={formattedName}
        className="form-control"
        onChange={onChange}
      >
        <option value="" selected />
        {
          options.map((option) => {
            const formattedValue = option.value || option.text.toUpperCase().replace(' ', '_');

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
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
};

// eslint-disable-next-line
Select.defaultProps = {
  onChange: null,
};

export default Select;
