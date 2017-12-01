import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ children }) => (
  <div className="aside-header clearfix">
    <span className="brand-logo pull-left">
      { children }
    </span>
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
