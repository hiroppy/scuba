import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {Container} from '../src';
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
    <Container
      theme="sea"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('aa')}
      >
        Hello
      </Button>
      <Button style={{margin: 5}}>
        Hello-Hello-Hello
      </Button>
    </Container>
    <Container
      theme="deepSea"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('aa')}
      >
        Hello
      </Button>
      <Button style={{margin: 5}}>
        Hello-Hello-Hello
      </Button>
    </Container>
    <Container
      theme="sunset"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('aa')}
      >
        Hello
      </Button>
      <Button style={{margin: 5}}>
        Hello-Hello-Hello
      </Button>
    </Container>
    <Container
      theme="mint"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('aa')}
      >
        Hello
      </Button>
      <Button style={{margin: 5}}>
        Hello-Hello-Hello
      </Button>
    </Container>
    <Container
      theme="mikan"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('aa')}
      >
        Hello
      </Button>
      <Button style={{margin: 5}}>
        Hello-Hello-Hello
      </Button>
    </Container>
  </div>
));
