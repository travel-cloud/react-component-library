import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ children }) => (
  <nav>
    { children }
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
