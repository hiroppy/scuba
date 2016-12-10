import React from 'react';
import { Button } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style';

const sampleCode = `import {Button} from 'scuba';

<div>
    <Button>BUTTON</Button>
    <Button disabled>DISABLED</Button>
    <Button clear>CLEAR</Button>
</div>
`;

const Buttons = () => (
  <div>
    <h2 id="buttons">Buttons</h2>
    <div className={styles.buttons}>
      <Button>BUTTON</Button>
      <Button disabled>DISABLED</Button>
      <Button clear>CLEAR</Button>
    </div>
    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
    {generateTableTemplate([
      {
        name   : 'width',
        type   : 'string | number',
        default: 'auto'
      },
      {
        name   : 'disabled',
        type   : 'boolean',
        default: 'false'
      },
      {
        name   : 'clear',
        type   : 'boolean',
        default: 'false'
      }
    ])}
  </div>
);

export default Buttons;
