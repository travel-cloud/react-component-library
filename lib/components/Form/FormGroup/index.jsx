import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const FormGroup = ({ fieldId, fieldName, children }) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    {children}
  </div>
);
/* eslint-enable */

// eslint-disable-next-line
FormGroup.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormGroup;
