import React from 'react';
import {Button} from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style';

const sampleCode = `import {Button} from 'scuba';

<Button>BUTTON</Button>
<Button disabled>DISABLED</Button>
<Button clear>CLEAR</Button>
`;

const Buttons = () => (
  <div>
    <h2 id="buttons">Buttons</h2>
    <div className={styles.buttons}>
      <Button>BUTTON</Button>
      <Button disabled>DISABLED</Button>
      <Button clear>CLEAR</Button>
    </div>
    {generateTableTemplate([
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false'
      },
      {
        name: 'clear',
        type: 'boolean',
        default: 'false'
      }
    ])}
    {generateCodeTemplate(sampleCode)}
  </div>
);

export default Buttons;
