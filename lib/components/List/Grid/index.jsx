import React from 'react';
import PropTypes from 'prop-types';

const renderListColumns = ({ keyMap, item }) => keyMap.map(column => (
  <p
    key={`p-${item[keyMap[0].key]}-${column.key}`}
    className="pull-left"
    style={{ width: '20%', marginBottom: '15px' }}
  >
    {
        column.link ?
          <a href={column.link.replace(':id', item[column.key])} className="text-large">
            {item[column.key]}
          </a>
          :
          <span className="text-large">{item[column.key]}</span>
      }
    <br />
    <span className="text-muted">{column.text || column.key}</span>
  </p>
));

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
    link: PropTypes.string,
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
