import React from 'react';
import { Code, SelectBox, Select } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style.css';

const sampleCode = `import {SelectBox, Select} from 'scuba';

<div>
    <SelectBox
        width={150}
        onChange={(value) => console.log(value)}
    >
        <Select value="1">select-1</Select>
        <Select value="2">select-2</Select>
        <Select value="3" default>select-3</Select>
        <Select value="4">select-4</Select>
    </SelectBox>

    <SelectBox
        width={150}
        listPosition="top"
    >
        <Select value="1">select-1</Select>
        <Select value="2">select-2</Select>
        <Select value="3">select-3</Select>
        <Select value="4">select-4</Select>
    </SelectBox>
</div>`;

const SelectBoxes = () => (
  <div>
    <h2>SelectBoxes</h2>
    <p>
      If you set a value to
      <code>Select</code>
      ,
      the return when
      <code>onChange</code>
      is executed is its value.
    </p>
    <p>
      If this is unspecified,
      <code>onChange</code>
      returns its text.
    </p>
    <p>
      Set
      <code>{'Select\'s default'}</code>
      to what want to display first.
    </p>
    <Code fileName="Example">{'<Select value="3" default>select-3</Select>'}</Code>
    <br />
    <div className={styles.selectBoxes}>
      <SelectBox width={150}>
        <Select value="1">select-1</Select>
        <Select value="2">select-2</Select>
        <Select value="3" default>select-3</Select>
        <Select value="4">select-4</Select>
      </SelectBox>
      <SelectBox
        width={150}
        listPosition="top"
      >
        <Select value="1">select-1</Select>
        <Select value="2">select-2</Select>
        <Select value="3">select-3</Select>
        <Select value="4">select-4</Select>
      </SelectBox>
    </div>
    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
    <h4>SelectBox</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      },
      {
        name   : 'width',
        type   : 'number | string',
        default: '100%'
      },
      {
        name   : 'disabled',
        type   : 'boolean',
        default: 'false'
      },
      {
        name   : 'listPosition',
        type   : 'top | bottom',
        default: 'bottom'
      },
      {
        name   : 'listHeight',
        type   : 'number | string',
        default: 'auto'
      },
      {
        name   : 'onChange',
        type   : 'Function',
        default: ''
      }
    ])}
    <h4>Select</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      },
      {
        name   : 'default',
        type   : 'boolean',
        default: ''
      },
      {
        name   : 'value',
        type   : 'string',
        default: ''
      }
    ])}
  </div>
);

export default SelectBoxes;
