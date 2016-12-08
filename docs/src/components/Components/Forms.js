import React from 'react';
import { TextField, TextArea, SelectBox, Select } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style.css';

const sampleCode1 = `import {TextField, TextArea} from 'scuba';

<div>
    <label style={{marginBottom: '.5rem'}}>textField</label>
    <TextField placeholder="placeholder 😎" />
    <label style={{margin: '1.2rem 0 .5rem 0'}}>textArea</label>
    <TextArea placeholder="😊" />
</div>
`;

const sampleCode2 = `import {SelectBox, Select} from 'scuba';

<div>
    <SelectBox
        width={150}
        onChange={(value) => console.log(value)}
    >
        <Select value="1">select-1</Select>
        <Select value="2">select-2</Select>
        <Select value="3" default>select-3</Select>
        <Select value="3">select-4</Select>
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

const Forms = () => (
  <div>
    <h2 id="forms">Forms</h2>
    <p>TextField and TextArea are changed border color by theme.</p>
    <label style={{ marginBottom: '.5rem' }}>textField</label>
    <TextField
      style={{ width: '80%' }}
      placeholder="placeholder 😎"
    />
    <label style={{ margin: '1.2rem 0 .5rem 0' }}>textArea</label>
    <TextArea
      style={{ width: '80%' }}
      placeholder="😊"
    />
    {generateCodeTemplate(sampleCode1)}
    <h3>Properties</h3>
    <p>Forms have no custom props.</p>
    <h2 id="selects">Selects</h2>
    <p>
      If you set a value to
      <code>Select</code>
      ,
      the return when
      <code>onChange</code>
      is executed is its value.
      If this is unspecified,
      <code>onChange</code>
      returns its text.
    </p>
    <div className={styles.selectBoxes}>
      <SelectBox width={150}>
        <Select value="1">select-1</Select>
        <Select value="2">select-2</Select>
        <Select value="3" default>select-3</Select>
        <Select value="3">select-4</Select>
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
    {generateCodeTemplate(sampleCode2)}
    <h3>Properties</h3>
    <h4>SelectBox</h4>
    {generateTableTemplate([
      {
        name   : 'width',
        type   : 'number | string',
        default: '100%'
      },
      {
        name   : 'height',
        type   : 'number | string',
        default: 'auto'
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
        default: 'undefined'
      }
    ])}
    <h4>Select</h4>
    {generateTableTemplate([
      {
        name   : 'default',
        type   : 'boolean',
        default: 'undefined'
      },
      {
        name   : 'value',
        type   : 'string',
        default: 'undefined'
      }
    ])}
  </div>
);

export default Forms;
