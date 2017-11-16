import React from 'react';

import GridWireframe from '../../List/Grid/Wireframe';

const Skeleton = ({ button }) => [
  <div key="skeletonLoader" className="wireframe-container">
    <GridWireframe button={button} />
    <div className="loading-spinner wireframe-loader" />
  </div>,
];

export default Skeleton;
