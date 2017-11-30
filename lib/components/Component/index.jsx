import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Component = ({ children }) => (
  <Fragment>
    {children}
  </Fragment>
);

// eslint-disable-next-line
Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default Component;
