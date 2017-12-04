import { configure } from '@storybook/react';

import styles from '../lib/components/UI/ui-styles.css';

const req = require.context('../lib/components', true, /stories\.js$/);

const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);
