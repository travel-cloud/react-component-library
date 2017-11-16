import React from 'react';
import PropTypes from 'prop-types';

const rowCount = 10;
const columnCount = 5;

const GridWireframe = ({ button }) => [
  button && <div key="wireframeButton" className="wireframe-button" />,
  <ul key="wireframeList" className="list-group wireframe-container">
    {
      [...Array(rowCount)].map((column, index) => (
        <li
          key={`li-grid-wireframe-${Math.random()}`}
          className="wireframe-li pull-left fade-in"
          style={{ marginTop: `-${index > 0 ? (index + 1) * 10 : 0}px`, zIndex: 100 - index }}
        >
          {
            [...Array(columnCount)].map(() => (
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
GridWireframe.propTypes = {
  button: PropTypes.bool,
};

// eslint-disable-next-line
GridWireframe.defaultProps = {
  button: true,
};

export default GridWireframe;
