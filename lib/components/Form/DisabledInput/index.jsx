import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const DisabledInput = ({ fieldId, fieldName }) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <input
      disabled
      type="text"
      id={fieldId}
      className="form-control"
    />
  </div>
);
/* eslint-enable */

// eslint-disable-next-line
DisabledInput.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default DisabledInput;
