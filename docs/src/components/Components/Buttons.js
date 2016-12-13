import React from 'react';
import { Button } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style';

const sampleCode = `import {Button} from 'scuba';

<div>
    <Button>BUTTON</Button>
    <Button backgroundColor="none">BUTTON</Button>
    <Button disabled>DISABLED</Button>
    <Button clear>CLEAR</Button>
</div>
`;

const Buttons = () => (
  <div>
    <h2 id="buttons">Buttons</h2>
    <div className={styles.buttons}>
      <Button>BUTTON</Button>
      <Button backgroundColor="none">BUTTON</Button>
      <Button disabled>DISABLED</Button>
      <Button clear>CLEAR</Button>
    </div>
    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
    <h4>Button</h4>
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
        default: 'auto'
      },
      {
        name   : 'backgroundColor',
        type   : 'none | string',
        default: 'a theme\'s color'
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
      },
      {
        name   : 'onClick',
        type   : 'Function',
        default: ''
      }
    ])}
  </div>
);

export default Buttons;
