import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  fieldId,
  onClick,
  checked,
  text,
  name,
  defaultChecked,
}) => (
  <div className="checkbox">
    <label htmlFor={fieldId}>
      <input
        type="checkbox"
        id={fieldId}
        name={name}
        className="form-control"
        onClick={onClick}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      {text}
    </label>
  </div>
);

// eslint-disable-next-line
Checkbox.propTypes = {
  fieldId: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

// eslint-disable-next-line
Checkbox.defaultProps = {
  onClick: null,
  checked: null,
  defaultChecked: false,
  fieldId: '',
  name: '',
};

export default Checkbox;
