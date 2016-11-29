import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {Container} from '../src';
import Button from '../src/Button';

const styles = {
  wrapper: {
    background: '#eee',
    height: 500,
    padding: 30
  }
};

storiesOf('Button', module).add('list', () => (
  <div style={styles.wrapper}>
    <Container
      theme="sea"
      subColor="light"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('button')}
      >
        Hello
      </Button>
      <Button
        style={{margin: 5}}
        disabled
        onClick={action('button')}
      >
        disabled
      </Button>
    </Container>
    <Container
      theme="sea"
      subColor="dark"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('button')}
      >
        Hello
      </Button>
      <Button
        style={{margin: 5}}
        disabled
        onClick={action('button')}
      >
        disabled
      </Button>
    </Container>

    <Container
      theme="deepSea"
      subColor="light"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('button')}
      >
        Hello
      </Button>
      <Button
        disabled
        style={{margin: 5}}
      >
        disabled
      </Button>
    </Container>
    <Container
      theme="deepSea"
      subColor="dark"
      style={{
        margin: 10
      }}
    >
      <Button
        style={{margin: 5}}
        onClick={action('button')}
      >
        Hello
      </Button>
      <Button
        disabled
        style={{margin: 5}}
      >
        disabled
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
        onClick={action('button')}
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
        onClick={action('button')}
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
        onClick={action('button')}
      >
        Hello
      </Button>
      <Button style={{margin: 5}}>
        Hello-Hello-Hello
      </Button>
    </Container>
  </div>
));
