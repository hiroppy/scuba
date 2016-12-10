import React from 'react';
import { Avatar } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style.css';

const sampleCode = `import {Avatar} from 'scuba';

<div>
    <Avatar src="./images/choko.jpg" />
    <Avatar
        src="./images/choko.jpg"
        form="square"
    />
    <Avatar><span>kao</span></Avatar>
    <Avatar form="square"><span>kao</span></Avatar>
</div>`;

const Avatars = () => (
  <div>
    <h2 id="avatars">Avatars</h2>
    <p>Avatars can be used to images and letters(or icon, etc).</p>
    <p>
      The default
      <code>width</code>
      and
      <code>height</code>
      are 60px.
    </p>
    <div className={styles.avatars}>
      <Avatar src="./images/choko.jpg" />
      <Avatar
        src="./images/choko.jpg"
        form="square"
      />
      <Avatar>
        <span>kao</span>
      </Avatar>
      <Avatar form="square">
        <span>kao</span>
      </Avatar>
    </div>
    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: 'undefined'
      },
      {
        name   : 'style',
        type   : 'Object',
        default: 'undefined'
      },
      {
        name   : 'src',
        type   : 'string',
        default: 'undefined'
      },
      {
        name   : 'form',
        type   : 'circle | square',
        default: 'circle'
      },
      {
        name   : 'width',
        type   : 'number | string',
        default: '60px'
      },
      {
        name   : 'height',
        type   : 'number | string',
        default: '60px'
      }
    ])}
  </div>
);

export default Avatars;
