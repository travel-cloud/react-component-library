import React from 'react';
import PropTypes from 'prop-types';

const AutoComplete = ({ items, onClick }) => (
  <ul className="autocomplete">
    {
      // eslint-disable-next-line
      items.map(item => <li onClick={() => onClick(item)}>{item.text}</li>)
    }
  </ul>
);

// eslint-disable-next-line
AutoComplete.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AutoComplete;
