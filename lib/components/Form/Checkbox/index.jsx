import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  fieldId,
  onClick,
  checked,
  text,
  name,
  defaultChecked,
  customClasses,
}) => (
  <div className="checkbox">
    <label htmlFor={fieldId}>
      <input
        type="checkbox"
        id={fieldId}
        name={name}
        className={customClasses ? `form-control ${customClasses}` : 'form-control'}
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
  customClasses: PropTypes.string,
};

// eslint-disable-next-line
Checkbox.defaultProps = {
  onClick: null,
  checked: null,
  defaultChecked: false,
  fieldId: '',
  name: '',
  customClasses: '',
};

export default Checkbox;
