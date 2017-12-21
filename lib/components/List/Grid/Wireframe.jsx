import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../Loader/Spinner';

const Wireframe = ({
  button,
  rows,
  columns,
  loader,
}) => [
  button && <div key="wireframeButton" className="wireframe-button" />,
  <div key="wireframe" className="ui-wireframe">
    { loader && <Spinner /> }
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
    </ul>
  </div>,
];

// eslint-disable-next-line
Wireframe.propTypes = {
  button: PropTypes.bool,
  rows: PropTypes.number,
  columns: PropTypes.number,
  loader: PropTypes.bool,
};

// eslint-disable-next-line
Wireframe.defaultProps = {
  button: true,
  rows: 10,
  columns: 5,
  loader: false,
};

export default Wireframe;
