import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ children }) => (
  <div className="sidebar">
    <div id="left-navigation-menu" className="left-off-canvas-menu active-menu" tabIndex="-1">
      {children}
    </div>
  </div>
);

// eslint-disable-next-line
Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default Sidebar;
