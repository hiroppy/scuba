import React from 'react';
import { List, Item } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode = `import {List, Item} from 'scuba';

<div>
    <List type="none">
        <Item><dt>dt, type: none</dt></Item>
        <Item><dd>dd, type: none</dd></Item>
    </List>
    <List type="circle">
        <Item><span>span, type: circle</span></Item>
        <Item><span>span, type: circle</span></Item>
    </List>
    <List type="square">
        <Item><span>span, type: square</span></Item>
        <Item><span>span, type: square</span></Item>
    </List>
    <List type="decimal">
        <Item><p>p, type: decimal</p></Item>
        <Item><p>p, type: decimal</p></Item>
    </List>
</div>
`;

const Lists = () => (
  <div>
    <h2 id="lists">Lists</h2>
    <p>
      We have
      <code>none</code>
      ,
      <code>circle</code>
      ,
      <code>square</code>
      ,
      <code>decimal</code>
      as list-style-type.
    </p>
    <List type="none">
      <Item><dt>dt, type: none</dt></Item>
      <Item><dd>dd, type: none</dd></Item>
    </List>
    <List type="circle">
      <Item><span>span, type: circle</span></Item>
      <Item><span>span, type: circle</span></Item>
    </List>
    <List type="square">
      <Item><span>span, type: square</span></Item>
      <Item><span>span, type: square</span></Item>
    </List>
    <List type="decimal">
      <Item><p>p, type: decimal</p></Item>
      <Item><p>p, type: decimal</p></Item>
    </List>
    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
    <h4>List</h4>
    {generateTableTemplate([
      {
        name   : 'type',
        type   : 'none | circle | square | decimal',
        default: 'circle'
      }
    ])}
  </div>
);

export default Lists;
