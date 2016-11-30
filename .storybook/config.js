import {configure} from '@kadira/storybook';

function loadStories() {
  require('../stories/Palet');
  require('../stories/Typography');
  require('../stories/Button');
  require('../stories/Blockquotes');
  require('../stories/List');
  require('../stories/Form');
}

configure(loadStories, module);
