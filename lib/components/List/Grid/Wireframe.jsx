import React from 'react';
import PropTypes from 'prop-types';

const Wireframe = ({ button, rows, columns }) => [
  button && <div key="wireframeButton" className="wireframe-button" />,
  <ul key="wireframeList" className="list-group">
    {
      [...Array(rows)].map((column, index) => (
        <li
          key={`li-grid-wireframe-${Math.random()}`}
          className="wireframe-li pull-left fade-in"
          style={{ marginTop: `-${index > 0 ? (index + 1) * 10 : 0}px`, zIndex: 100 - index }}
        >
          {
            [...Array(columns)].map(() => (
              <div
                key={`div-grid-wireframe-${Math.random()}`}
                className="pull-left"
                style={{ width: '20%', marginBottom: '15px' }}
              >
                <div className="wireframe" />
                <div className="wireframe w-small" />
              </div>))
          }
        </li>))
    }
  </ul>,
];

// eslint-disable-next-line
Wireframe.propTypes = {
  button: PropTypes.bool,
  rows: PropTypes.number,
  columns: PropTypes.number,
};

// eslint-disable-next-line
Wireframe.defaultProps = {
  button: true,
  rows: 10,
  columns: 5,
};

export default Wireframe;
