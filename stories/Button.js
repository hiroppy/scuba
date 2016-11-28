import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../src/Button';

const styles = {
  wrapper: {
    background: '#eee',
    height: 150,
    padding: 30
  }
};

storiesOf('Button', module).add('list', () => (
  <div style={styles.wrapper}>
    <Button
      style={{margin: 5}}
      onClick={action('aa')}
    >
      aaaaa
    </Button>
    <Button style={{margin: 5}}>
      Hello-Hello-Hello
    </Button>
  </div>
));
