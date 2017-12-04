import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ children }) => {
  // eslint-disable-next-line
  require('../UI/sidebar-layout.css');
  return (
    <div className="ui-sidebar">
      <div className="ui-sidebar-inner">
        {children}
      </div>
    </div>
  );
};

// eslint-disable-next-line
Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default Sidebar;
