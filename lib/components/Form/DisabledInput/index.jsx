import React from 'react';
import PropTypes from 'prop-types';

const DisabledInput = ({ fieldId, fieldName, customClasses }) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <input
      disabled
      type="text"
      id={fieldId}
      className={customClasses ? `form-control ${customClasses}` : 'form-control'}
    />
  </div>
);

// eslint-disable-next-line
DisabledInput.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
};

// eslint-disable-next-line
DisabledInput.defaultProps = {
  customClasses: '',
};

export default DisabledInput;
