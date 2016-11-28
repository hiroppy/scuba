import {configure} from '@kadira/storybook';

function loadStories() {
  require('../stories/Typography');
  // You can require as many stories as you need.
}

configure(loadStories, module);
