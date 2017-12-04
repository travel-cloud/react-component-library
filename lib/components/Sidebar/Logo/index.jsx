import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ children }) => (
  <div className="ui-logo">
    { children }
  </div>
);

// eslint-disable-next-line
Logo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default Logo;
