import { configure } from '@storybook/react';

function loadStories() {
  require('../src/frontend/stories/index');
  require('../src/frontend/stories/clock');
  require('../src/frontend/stories/todosWidget');
}

configure(loadStories, module);
