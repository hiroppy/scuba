import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Container, { List, Item } from '../src';

const styles = {
  light: {
    height    : 500,
    padding   : 10,
    background: '#eee'
  },
  dark: {
    height    : 500,
    padding   : 10,
    background: '#333'
  }
};

storiesOf('List', module).add('subColor is white', () => (
  <div style={styles.dark}>
    <Container subColor="light">
      <List type="circle">
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container theme="deepSea" subColor="light">
      <List>
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container theme="sunset" subColor="light">
      <List type="square">
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container theme="mint" subColor="light">
      <List type="decimal">
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container theme="mikan" subColor="light">
      <List>
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container subColor="light">
      <List type="none">
        <Item>order-1</Item>
        <Item>
          <dt>dt-tag</dt>
          <dd>dd-tag</dd>
        </Item>
      </List>
    </Container>
  </div>
)).add('subColor is dark', () => (
  <div style={styles.light}>
    <Container subColor="dark">
      <List type="circle">
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container
      theme="deepSea"
      subColor="dark"
    >
      <List>
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container
      theme="sunset"
      subColor="dark"
    >
      <List type="square">
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container
      theme="mint"
      subColor="dark"
    >
      <List type="decimal">
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container
      theme="mikan"
      subColor="dark"
    >
      <List>
        <Item>order-1</Item>
        <Item>order-2</Item>
      </List>
    </Container>
    <Container
      subColor="dark"
    >
      <List type="none">
        <Item>order-1</Item>
        <Item>
          <dt>dt-tag</dt>
          <dd>dd-tag</dd>
        </Item>
      </List>
    </Container>
  </div>
));
