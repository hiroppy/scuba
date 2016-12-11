import React from 'react';
import { Link } from 'react-router';
import { List, Item } from '../../../../src';
import links, { components as componentsLinks } from '../../linkslist';
import styles from './style';

const Sidebar = (props) => (
  <div className={`sidebar ${styles.container}`}>
    <h3><Link to={links[0].href}>{links[0].name}</Link></h3>
    <Link to={links[1].href}><p>{links[1].name}</p></Link>
    <Link to={links[2].href}><p>{links[2].name}</p></Link>
    <List type="none">
      <Item>
        <Link to="concept/colors">Colors</Link>
      </Item>
    </List>
    <Link to={links[3].href}><p>{links[3].name}</p></Link>
    <List type="none">
      {
        componentsLinks.map((item) => (
          <Item key={item.name}>
            <Link to={`components/${item.href}`}>{item.name}</Link>
          </Item>
        ))
      }
    </List>
  </div>
);

export default Sidebar;
