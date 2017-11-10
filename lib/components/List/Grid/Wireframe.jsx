import React from 'react';

const rowCount = 10;
const columnCount = 5;

const GridWireframe = () => [
  <div className="wireframe-button" />,
  <ul className="list-group wireframe-container">
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

export default GridWireframe;
