import React from 'react';
import { List, Li } from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';

const sampleCode = `import {
     sea, deepSea, sunset, mint, mikan
     dark, light
} from 'scuba/styles/colors';
`;

const Colors = () => (
  <div>
    <h2 id="colors">Colors</h2>
    <p>
      <em>Scuba </em>
      provides Sea, DeepSea, Sunset, Mint and Mikan as themes.
    </p>
    <List type="circle">
      <Li><span style={{ color: '#3498db' }}>Sea: #3498db</span></Li>
      <Li><span style={{ color: '#145d8e' }}>DeepSea: #145d8e</span></Li>
      <Li><span style={{ color: '#e14d4c' }}>Sunset: #e14d4c</span></Li>
      <Li><span style={{ color: '#2be8ce' }}>Mint: #2be8ce</span></Li>
      <Li><span style={{ color: '#db9634' }}>Mikan: #db9634</span></Li>
    </List>
    <p>The default theme is Sea.</p>
    <p>
      <em>Scuba </em>
      provides Light and Dark as sub colors.
    </p>
    <List type="square">
      <Li>
        <span
          style={{
            color     : '#f5f5f5',
            background: '#363636'
          }}
        >
          Light: #f5f5f5
        </span>
      </Li>
      <Li>
        <span
          style={{
            color     : '#363636',
            background: '#f5f5f5'
          }}
        >
          Dark: #363636
        </span>
      </Li>
    </List>
    <p>The default subColor is light.</p>
    {generateCodeTemplate(sampleCode)}
    <p>You can also specify a color value.</p>
  </div>
);

export default Colors;
