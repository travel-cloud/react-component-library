import React from 'react';
import PropTypes from 'prop-types';

const UI = ({ children, customStyles }) => {
  if (!customStyles) {
    // eslint-disable-next-line
    require('./ui-styles.css');
  }
  return (
    <div className={`ui-wrapper ui-styles-${!customStyles && 'true'}`}>
      {children}
    </div>
  );
};

// eslint-disable-next-line
UI.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  customStyles: PropTypes.bool,
};

// eslint-disable-next-line
UI.defaultProps = {
  customStyles: false,
};

export default UI;
