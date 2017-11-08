import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ classes, items, keyMap }) => (
  <ul className={`list-group ${classes}`}>
    {
      items.map(item => (
        <li className="pull-left" key={item[keyMap[0]]}>
          {keyMap.map(key =>
            (
              <p key={`p-${item[keyMap[0]]}-${key}`} className="pull-left" style={{ width: '20%', marginBottom: '15px' }}>
                <span className="text-large">{item[key]}</span>
                <br />
                <span className="text-muted">{key}</span>
              </p>
            ))}
        </li>))
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
