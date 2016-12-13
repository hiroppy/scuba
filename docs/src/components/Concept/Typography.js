import React from 'react';
import { Code, Paper } from '../../../../src';

const Typography = () => (
  <div>
    <h2>Typography</h2>
    <h3>Font</h3>
    <p>
      <em>Scuba </em>
      uses
      <a
        rel="noopener noreferrer"
        href="https://fonts.google.com/specimen/Cabin"
        target="_blank"
      >
        Cabin
      </a>
      font.
    </p>
    <p>{'fontFamily: Cabin, "Helvetica Neue", Helvetica, sans-serif'}</p>
    <Paper>
      {
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789\'?\'"!"(%)[#]{@}/&<-+$*~;:<>/{}'
      }
    </Paper>
    <h3>Changing fonts</h3>
    <Code language="html">
      {
        `<Container
            style={{
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif'
            }}
        />`
      }
    </Code>
    <h3>Headers</h3>
    <h1>h1(4.2rem). Heading</h1>
    <h2>h2(3.5rem). Heading</h2>
    <h3>h3(2.9rem). Heading</h3>
    <h4>h4(2.2rem). Heading</h4>
    <h5>h5(1.6rem). Heading</h5>
    <h6>h6(1.0rem). Heading</h6>
  </div>
);

export default Typography;
