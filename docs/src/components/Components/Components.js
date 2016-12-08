import React from 'react';
import { Link } from 'react-router';
import { Code, List, Item } from '../../../../src';
import { components as links } from '../../linkslist';
import styles from './style';

const Components = () => (
  <section className={styles.container}>
    <h1>Components</h1>
    <hr />
    <h2>Components List</h2>
    {
      <List type="circle">
        {
          links.map((item) => (
            <Item key={item.name}>
              <Link to={`components/${item.href}`}>{item.name}</Link>
            </Item>
          ))
        }
      </List>
    }
    <h2>Customization</h2>
    <p>
      If you want to change style or class name or others you can specify it like React.
    </p>
    <Code fileName="Button.js">
      {
        `<Button
    className="customName"
    style={{fontSize: '3rem'}}
    onClick={() => console.log('clicked')}
>
    BUTTON
</Button>
        `
      }
    </Code>
  </section>
);

export default Components;
