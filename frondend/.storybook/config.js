import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/index');
  require('../src/stories/clock');
  require('../src/stories/todosWidget');
}

configure(loadStories, module);
