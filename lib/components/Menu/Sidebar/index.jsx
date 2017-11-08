import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ menuItems, onClick }) => (
  <div className="sidebar">
    {
      // eslint-disable-next-line
      menuItems.map(menuItem => <div key={menuItem} onClick={onClick(menuItem)}>{menuItem}</div>)
    }
  </div>
);

// eslint-disable-next-line
Sidebar.propTypes = {
  menuItems: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;
