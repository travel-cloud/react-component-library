import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'flat';

const renderListColumns = ({ keyMap, item }) => {
  const flattenedItem = flatten(item);

  return keyMap.map(column => (
    <p
      key={Math.random()}
      className="pull-left"
      style={{ width: '20%', marginBottom: '15px' }}
    >
      {
      column.onClick ?
        // eslint-disable-next-line
        <span
          onClick={() => column.onClick(flattenedItem[column.key])}
          className="text-large link"
        >
          {flattenedItem[column.key]}
        </span> :
        <span className="text-large">{flattenedItem[column.key]}</span>
    }
      <br />
      <span className="text-muted">{column.text || column.key}</span>
    </p>));
};

const Grid = ({ classes, items, keyMap }) => (
  <ul className={`list-group ${classes}`}>
    {
      items.map(item => (
        <li className="pull-left" key={item[keyMap[0].key]}>
          { renderListColumns({ keyMap, item }) }
        </li>
      ))
    }
  </ul>
);

// eslint-disable-next-line
Grid.propTypes = {
  classes: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func,
    key: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  keyMap: PropTypes.arrayOf(PropTypes.object),
};

// eslint-disable-next-line
Grid.defaultProps = {
  classes: '',
  keyMap: [],
};

export default Grid;
