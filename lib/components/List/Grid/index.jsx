import React from 'react';
import PropTypes from 'prop-types';

const renderListColumn = ({ keyMap, item }) => keyMap.map((column) => {
  const keyIsObject = typeof column === 'object';
  return (
    <p
      key={`p-${item[keyMap[0]]}-${column}`}
      className="pull-left"
      style={{ width: '20%', marginBottom: '15px' }}
    >
      {
        keyIsObject ? <a href={column.link} className="text-large">{item[column.key]}</a>
          : <span className="text-large">{item[column]}</span>
      }
      <br />
      <span className="text-muted">{keyIsObject ? column.text || column.key : column}</span>
    </p>
  );
});

const Grid = ({ classes, items, keyMap }) => (
  <ul className={`list-group ${classes}`}>
    {
      items.map(item => (
        <li className="pull-left" key={item[keyMap[0]]}>
          { renderListColumn({ keyMap, item }) }
        </li>
      ))
    }
  </ul>
);

// eslint-disable-next-line
Grid.propTypes = {
  classes: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  keyMap: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// eslint-disable-next-line
Grid.defaultProps = {
  classes: '',
};

export default Grid;
