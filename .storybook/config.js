import {configure} from '@kadira/storybook';

function loadStories() {
  require('../stories/Palet');
  require('../stories/Typography');
  require('../stories/Button');
  require('../stories/Blockquotes');
}

configure(loadStories, module);
