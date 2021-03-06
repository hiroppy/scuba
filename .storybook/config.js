import {configure} from '@kadira/storybook';

function loadStories() {
  require('../stories/Palet');
  require('../stories/Typography');
  require('../stories/Avatar');
  require('../stories/Paper');
  require('../stories/Button');
  require('../stories/Blockquotes');
  require('../stories/List');
  require('../stories/Form');
  require('../stories/Table');
  require('../stories/Code');
  require('../stories/Grid');
  require('../stories/Drawer');
}

configure(loadStories, module);
