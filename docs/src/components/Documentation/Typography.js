import React from 'react';
import {Blockquote, Paper} from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';

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
const Typography = () => (
  <div>
    <h2 id="colors">Typography</h2>
    <p>
      <em>Scuba </em>
      uses
      <a
        href="https://fonts.google.com/specimen/Cabin"
        target="_blank"
      >
        Cabin
      </a>
      font.
    </p>
    <h3>Changing fonts</h3>
    {generateCodeTemplate(sampleCode1)}
    <h3>Headers</h3>
    <Paper>
      <h1>h1(4.2rem). Heading</h1>
      <h2>h2(3.5rem). Heading</h2>
      <h3>h3(2.9rem). Heading</h3>
      <h4>h4(2.2rem). Heading</h4>
      <h5>h5(1.6rem). Heading</h5>
      <h6>h6(1.0rem). Heading</h6>
    </Paper>
    <h3>Blockquotes</h3>
    <Blockquote>
      <span>the blockquote!</span>
    </Blockquote>
    <p>Blockquotes have no custom props.</p>
    {generateCodeTemplate(sampleCode2)}
  </div>
);

export default Typography;
