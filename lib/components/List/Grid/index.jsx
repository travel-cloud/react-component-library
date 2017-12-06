import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'flat';
import Wireframe from './Wireframe';

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

const Grid = ({
  classes,
  items,
  keyMap,
  withLoader,
}) => [
  items.length > 0 || !withLoader ?
    <ul className={`ui-grid list-group ${classes}`}>
      {
        items.map(item => (
          <li className="pull-left" key={item[keyMap[0].key]}>
            { renderListColumns({ keyMap, item }) }
          </li>
        ))
      }
    </ul> : <Wireframe loader button={false} rows={3} columns={5} />,
];

// eslint-disable-next-line
Grid.propTypes = {
  classes: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func,
    key: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  keyMap: PropTypes.arrayOf(PropTypes.object),
  withLoader: PropTypes.bool,
};

// eslint-disable-next-line
Grid.defaultProps = {
  classes: '',
  keyMap: [],
  withLoader: false,
};

export default Grid;
