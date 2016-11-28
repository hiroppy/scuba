import {configure} from '@kadira/storybook';

function loadStories() {
  require('../stories/Typography');
  require('../stories/Button');
  // You can require as many stories as you need.
}

configure(loadStories, module);
