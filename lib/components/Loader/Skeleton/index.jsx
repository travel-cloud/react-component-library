import React from 'react';

import GridWireframe from '../../List/Grid/Wireframe';

const Skeleton = () => [
  <GridWireframe />,
  <br />,
  <div className="loading-spinner wireframe-loader" />,
];

export default Skeleton;
