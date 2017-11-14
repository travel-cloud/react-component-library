import React from 'react';

import GridWireframe from '../../List/Grid/Wireframe';

const Skeleton = ({ button }) => [
  <div className="wireframe-container">
    <GridWireframe button={button} />
    <div className="loading-spinner wireframe-loader" />
  </div>,
];

export default Skeleton;
