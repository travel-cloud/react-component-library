import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ children }) => (
  <nav>
    <ul id="primary-aside-menu" className="aside-menu active-menu">
      { children }
    </ul>
  </nav>
);

// eslint-disable-next-line
Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default Nav;
