import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Checkbox = ({fieldId, fieldName, onClick, checked, text}) => (
  <div className="form-group">
    {fieldName && <label htmlFor={fieldId}>{fieldName}</label>}
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
Checkbox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

// eslint-disable-next-line
Checkbox.defaultProps = {
  onClick: null,
  checked: false,
  fieldName: '',
};

export default Checkbox;
