import React from 'react';
import { List, Li } from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode = `import {List, Li} from 'scuba';

<div>
    <List type="none">
        <Li><dt>dt, type: none</dt></Li>
        <Li><dd>dd, type: none</dd></Li>
    </List>
    <List type="circle">
        <Li><span>span, type: circle</span></Li>
        <Li><span>span, type: circle</span></Li>
    </List>
    <List type="square">
        <Li><span>span, type: square</span></Li>
        <Li><span>span, type: square</span></Li>
    </List>
    <List type="decimal">
        <li><p>p, type: decimal</p></li>
        <li><p>p, type: decimal</p></li>
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
      <Li><dt>dt, type: none</dt></Li>
      <Li><dd>dd, type: none</dd></Li>
    </List>
    <List type="circle">
      <Li><span>span, type: circle</span></Li>
      <Li><span>span, type: circle</span></Li>
    </List>
    <List type="square">
      <Li><span>span, type: square</span></Li>
      <Li><span>span, type: square</span></Li>
    </List>
    <List type="decimal">
      <li><p>p, type: decimal</p></li>
      <li><p>p, type: decimal</p></li>
    </List>
    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
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
