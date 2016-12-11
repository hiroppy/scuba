import React from 'react';
import { TextField, TextArea } from '../../../../src';
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

const Forms = () => (
  <div>
    <h2 id="forms">Forms</h2>
    <p>TextField and TextArea are changed border color by theme.</p>
    <label style={{ marginBottom: '.5rem' }}>textField</label>
    <TextField
      style={{ width: '100%' }}
      placeholder="placeholder 😎"
    />
    <label style={{ margin: '1.2rem 0 .5rem 0' }}>textArea</label>
    <TextArea
      style={{ width: '100%' }}
      placeholder="😊"
    />
    {generateCodeTemplate(sampleCode1)}
    <h3>Properties</h3>
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
        name   : 'placeholder',
        type   : 'string',
        default: ''
      },
      {
        name   : 'onChange',
        type   : 'Function',
        default: ''
      }
    ])}
  </div>
);

export default Forms;
