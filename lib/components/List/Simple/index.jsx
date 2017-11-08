import React from 'react';
import PropTypes from 'prop-types';

const Simple = ({ items }) => (
  <ul className="list-group">
    {
      items.map(item => <li key={item}>{item}</li>)
    }
  </ul>
);

// eslint-disable-next-line
Simple.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default Simple;
