import React from 'react';

import GridWireframe from '../../List/Grid/Wireframe';

const Skeleton = () => [
  <div className="wireframe-container">
    <GridWireframe />
    <div className="loading-spinner wireframe-loader" />
  </div>,
];

export default Skeleton;
