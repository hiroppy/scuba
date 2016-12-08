import React from 'react';
import { Link } from 'react-router';
import { List, Li } from '../../../../src';
import links, { components as componentsLinks } from '../../linkslist';
import styles from './style';

const Sidebar = (props) => (
  <div className={`sidebar ${styles.container}`}>
    <h3><Link to={links[0].href}>{links[0].name}</Link></h3>
    <p><Link to={links[1].href}>{links[1].name}</Link></p>
    <p><Link to={links[2].href}>{links[2].name}</Link></p>
    <p><Link to={links[3].href}>{links[3].name}</Link></p>
    <List type="none">
      {
        componentsLinks.map((item) => (
          <Li>
            <Link to={`components/${item.href}`}>{item.name}</Link>
          </Li>
        ))
      }
    </List>
  </div>
);

export default Sidebar;
