import { configure } from '@storybook/vue';

import '@/assets/css/tailwind.css';

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
