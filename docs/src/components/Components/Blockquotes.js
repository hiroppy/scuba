import React from 'react';
import { Blockquote } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode1 = `<Container
    style={{
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif'
    }}
/>
`;

const sampleCode2 = `import {Blockquote} from 'scuba';

<Blockquote>
    <span>the blockquote!</span>
</Blockquote>
`;
const Blockquotes = () => (
  <div>
    <h2>Blockquotes</h2>
    <Blockquote>
      <span>the blockquote!</span>
    </Blockquote>
    {generateCodeTemplate(sampleCode2)}
    <h3>Properties</h3>
    <h4>Blockquote</h4>
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
      }
    ])}
  </div>
);

export default Blockquotes;
