import React from 'react';
import { Blockquote, Paper } from '../../../../lib';
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
    <h2 id="typography">Typography</h2>
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
    <Paper>
      {
        `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'?'"!"(%)[#]{@}/&<-+$*~;:<>/{}`
      }
    </Paper>
    <h3>Changing fonts</h3>
    {generateCodeTemplate(sampleCode1, 'html')}
    <h3>Headers</h3>
    <style>{`#heading {margin-top: 0 !important}`}</style> {/* [TODO] sorry... */}
    <Paper>
      <h1>h1(4.2rem). Heading</h1>
      <h2 id="heading">h2(3.5rem). Heading</h2>
      <h3>h3(2.9rem). Heading</h3>
      <h4>h4(2.2rem). Heading</h4>
      <h5>h5(1.6rem). Heading</h5>
      <h6>h6(1.0rem). Heading</h6>
    </Paper>
    <h3>Blockquotes</h3>
    <Blockquote>
      <span>the blockquote!</span>
    </Blockquote>
    {generateCodeTemplate(sampleCode2)}
    <h3>Properties</h3>
    <p>Blockquotes have no custom props.</p>
  </div>
);

export default Typography;
